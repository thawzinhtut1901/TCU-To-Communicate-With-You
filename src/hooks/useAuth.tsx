import { useMutation } from "@tanstack/react-query";
import { AuthData, LoginData, NewPswData, profileSetupData, VerifyData } from "../types/type";
import { SignUpAPI } from "../API";
import { forgetPasswordAPI, newPasswordAPI, profileSetupAPI, ResendOtpAPI, resetPswAPI, SignInAPI, VerifyEmailAPI } from "@/API/AuthAPI";

export const useSignUp = () =>
  useMutation({
    mutationFn: (data: AuthData) => SignUpAPI({ data }),
  });

export const useSignIn = () =>
  useMutation({
    mutationFn: (data: LoginData) => SignInAPI({ data }),
  });
  
export const useVerifyEmail = () =>
  useMutation({
    mutationFn: (data: VerifyData) => VerifyEmailAPI({ data }),
  });

export const useResendOtp = () => 
  useMutation({
    mutationFn: (email: string) => ResendOtpAPI({email}) 
  })  

export const useForgetPassword = (email:string) => 
  useMutation({
    mutationFn: () => forgetPasswordAPI(email)
  });

export const useResetPassword = () =>
  useMutation({
    mutationFn: (data: VerifyData) => resetPswAPI({data}),
  });

export const useNewPassword = () => 
  useMutation({
    mutationFn: (data: NewPswData) => newPasswordAPI({data}),
  });

export const useProfileSetUp = () => 
  useMutation({
    mutationFn: (data: profileSetupData) => profileSetupAPI({data}),
  });