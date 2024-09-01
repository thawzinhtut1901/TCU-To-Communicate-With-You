import BaseURL from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService"

export const usersAccount = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/admin-dashboard/user-data`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    });

    const result = await response.json();
    if(!result.ok){
        throw new Error(result.message);
    }
    return result;
}