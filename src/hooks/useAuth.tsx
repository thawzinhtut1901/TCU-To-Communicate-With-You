import { useMutation } from "@tanstack/react-query";
import { AuthData, VerifyData } from "../types/type";
import { SignUpAPI } from "../API";
import { ResendOtpAPI, VerifyEmailAPI } from "@/API/AuthAPI";

export const useSignUp = () =>
  useMutation({
    mutationFn: (data: AuthData) => SignUpAPI({ data }),
  });

export const useVerifyEmail = () =>
  useMutation({
    mutationFn: (data: VerifyData) => VerifyEmailAPI({ data }),
  });

export const useResendOtp = () => 
  useMutation({
    mutationFn: (email: string) => ResendOtpAPI({email}) 
  })  
