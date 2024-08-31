import BaseURL from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService";
import { UserData } from "@/types/type"

export const getMe = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/users/me`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.ok) {
        throw new Error(result.message);
    }
    return result as UserData;
};