import BaseURL from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService"

export const getAllChatAPI = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/chats`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}