import BaseURL from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService"
// import { userPublicQuotesData } from "@/types/type";

export const getPublishQuotes = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/quotes/published`, {
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
        if (!response.ok) {
            throw new Error(result.message);
        }
     return result;
}