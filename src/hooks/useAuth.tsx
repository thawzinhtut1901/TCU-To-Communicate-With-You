import { useMutation } from "@tanstack/react-query";
import { AuthData } from "../types/type";
import { SignUpAPI } from "../API";

export const useSignUp = () => 
    useMutation({
        mutationFn: (data: AuthData) => SignUpAPI({ data }),
      });