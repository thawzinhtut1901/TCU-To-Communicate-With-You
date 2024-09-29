import { useFetchGoogleLogIn } from '@/hooks';
import { login } from '@/services/authService';
import { GoogleLogInData } from '@/types/type';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; 
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLoading } from '../ui/buttonLoading';

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const jwt_decode = jwtDecode;
  const GoogleLogInAccount = useFetchGoogleLogIn();
  const [, setLoginData] = useState<GoogleLogInData>({
    email: "",
    displayName: "",
    profile: ""
  });

  useEffect(() => {
    if(GoogleLogInAccount.isSuccess) {
      const authToken = GoogleLogInAccount.data.accessToken;
      delete GoogleLogInAccount.data.accessToken;
      login(authToken);
      navigate("/home")
    }
  }, [GoogleLogInAccount.isSuccess]);

  const handleGoogleLoginSuccess = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      // Decode the token to get user info
      const decodedToken: any = jwt_decode(credentialResponse.credential);

      // Extract the relevant user data
      const userData: GoogleLogInData = {
        email: decodedToken.email,
        displayName: decodedToken.name,
        profile: decodedToken.picture,
      };

      // Update the state with the user data
      setLoginData(userData);

      // Call the hook with the user data
      GoogleLogInAccount.mutate(userData);

      console.log('Login Successful:', userData);
    } else {
      console.log('Failed to retrieve credential');
    }
  };

  return (
    <div>
      {
        !GoogleLogInAccount.isPending ? (
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        ) : (
          <ButtonLoading/>
        )
      }
    </div>
  );
};

export default GoogleLoginButton;
