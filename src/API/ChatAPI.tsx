import { BaseURL } from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService"
import { createChatData } from "@/types/type";

export const createNewChatAPI = async(
    {data} :
    {data: createChatData}
) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/chats`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "POST",
        redirect: "follow",
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    }
    return result;
}

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

export const getMessagesAPI = async(chatId:string) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/messages/${chatId}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow"
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}

export const getAChatAPI = async(chatId:string) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/chats/${chatId}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow"
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}