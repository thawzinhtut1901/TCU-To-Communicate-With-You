import { useMutation } from "@tanstack/react-query";
import { AuthData } from "../types/type";
import { forgetPasswordAPI, SignUpAPI } from "../API";

export const useSignUp = () => 
    useMutation({
        mutationFn: (data: AuthData) => SignUpAPI({ data }),
      });

export const useForgetPassword = (email:string) => 
  useMutation({
    mutationFn: () => forgetPasswordAPI(email)
  })