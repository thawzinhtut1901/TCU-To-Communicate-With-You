import BaseURL from "../services/ApiEndPoint"
import { AuthData } from "../types/type"

export const SignUpAPI = async({
    data
}: {
    data:AuthData
}) => {
    const response : Response = await fetch(`${BaseURL}/auth/signup`, {
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