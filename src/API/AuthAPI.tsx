import { getToken } from "@/services/authService";
import BaseURL from "../services/ApiEndPoint";
import { AuthData, NewPswData, VerifyData } from "../types/type";

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

export const SignInAPI = async ({ data }: { data: AuthData }) => {
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
  const response: Response = await fetch(`${BaseURL}/auth/verify-email`, {
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
    const response : Response = await fetch(`${BaseURL}/auth/resend-email-otp/${email}`,{
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
  const response: Response = await fetch(`${BaseURL}/auth/forget-password/${email}`, {
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
  };
  return result;
};

export const resetPswAPI = async({
  data
} : {
  data: VerifyData
}) => {
  const response: Response = await fetch(`${BaseURL}/auth/reset-password`, {
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
  };
  return result;
};

export const newPasswordAPI = async({
  data
} : {
  data : NewPswData
}) => {
  const token = getToken();
  const response: Response = await fetch(`${BaseURL}/auth/change-password`, {
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