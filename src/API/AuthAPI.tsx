import { getToken } from "@/services/authService";
import BaseURL from "../services/ApiEndPoint";
import { AuthData, GoogleLogInData, LoginData, NewPswData, profileSetupData, VerifyData } from "../types/type";

export const SignUpAPI = async ({ data }: { data: AuthData }) => {
  const response: Response = await fetch(`${BaseURL}/auth/signup`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "POST",
    redirect: "follow",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const SignInAPI = async ({ data }: { data: LoginData }) => {
  const response: Response = await fetch(`${BaseURL}/auth/signin`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "POST",
    redirect: "follow",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const VerifyEmailAPI = async ({ data }: { data: VerifyData }) => {
  const response: Response = await fetch(`${BaseURL}/auth/signup/email-verify`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "POST",
    redirect: "follow",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const ResendOtpAPI = async ({email} : {email : string}) => {
    const response : Response = await fetch(`${BaseURL}/auth/signup/otp-resend/${email}`,{
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
          method: "PATCH",
          redirect: "follow",
    });
     const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
}

export const forgetPasswordAPI = async(email: string) => {
  const response: Response = await fetch(`${BaseURL}/auth/password/forget/${email}`, {
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      mode: "cors",
      method: "PATCH",
  });
  const result = await response.json();
  if(!response.ok) {
      throw new Error(result.message);
  }
  return result;
};

export const resetPswAPI = async({
  data
} : {
  data: VerifyData
}) => {
  const response: Response = await fetch(`${BaseURL}/auth/password/reset`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "PATCH",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if(!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const newPasswordAPI = async({
  data
} : {
  data : NewPswData
}) => {
  const token = getToken();
  const response: Response = await fetch(`${BaseURL}/auth/password/change`, {
    headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    redirect: "follow",
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if(!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const profileSetupAPI = async({
  data
} : {
  data : profileSetupData
}) => {
  const token = getToken();
  const formData = new FormData();
  formData.append("userName", data.userName);
  formData.append("dispalyName", data.displayName);

  if(data.profilePicture) {
    formData.append("profilePicture", data.profilePicture);
  }

  if(data.bio){
    formData.append("bio", data.bio)
  }

  if(data.dateOfBirth) {
    formData.append("dateOfBirth", data.dateOfBirth);
  }
  
  if(data.gender) {
    formData.append("gender", data.gender)
  }


  const response: Response = await fetch(`${BaseURL}/users/profile-setup`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    redirect: "follow",
    body: formData,
  });

  const result = await response.json();
  if(!response.json) {
    throw new Error(result.message);
  }
  return result;
}

export const googleLogin = async(
  {data}:
  {data: GoogleLogInData}
) => {
  const response: Response = await fetch(`${BaseURL}/auth/google`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },    
    mode: "cors",
    method: "POST",
    redirect: "follow",
    body: JSON.stringify(data)
  });

  if(response.redirected) {
    console.log( response.url)
    window.location.href = response.url;
  } else {
    const result = await response.json();
    if(!response.json) {
      throw new Error(result.message);
    }
    return result;
  }

 
}