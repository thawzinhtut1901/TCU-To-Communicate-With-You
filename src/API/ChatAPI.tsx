import { BaseURL } from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService"
import { createChatData, createGroupData, CreateMessageData } from "@/types/type";

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

export const createMessageAPI = async(
    {data} :
    {data: CreateMessageData}
) =>  {
    const token = getToken();
    const formData = new FormData();
    formData.append("chatId", data.chatId);
    formData.append("text", data.text);
  
    const response:Response = await fetch(`${BaseURL}/messages`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          mode: "cors",
          method: "POST",
          redirect: "follow",
          body: formData,
        });
        const result = await response.json();
        if(!response.json) {
          throw new Error(result.message);
        }
        return result;
}

export const createGroupAPI = async({data} : {data: createGroupData}) => {
    const token = getToken();
    const formData = new FormData();
    formData.append("groupName", data.groupName);

    formData.append("memberIds", JSON.stringify(data.memeberIds));  // Send as JSON string array

    if(data.profilePicture) {
        formData.append("profilePicture", data.profilePicture);
    }
    const response:Response = await fetch(`${BaseURL}/group-chats`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        mode: "cors",
        method: "POST",
        redirect: "follow",
        body: formData,
    })
    const result = await response.json();
    if(!response.json) {
      throw new Error(result.message);
    }
    return result;
}

export const getAGroupChat = async(groupChatId:string) => {
    const token = getToken()
    const response:Response = await fetch(`${BaseURL}/group-chats/${groupChatId}`, {
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