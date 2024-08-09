import { useMutation } from "@tanstack/react-query";
import { AuthData } from "../types/type";
import { SignInAPI, SignUpAPI } from "../API";

export const useSignUp = () =>
  useMutation({
    mutationFn: (data: AuthData) => SignUpAPI({ data }),
  });

export const useSignIn = () =>
  useMutation({
    mutationFn: (data: AuthData) => SignInAPI({ data }),
  });
