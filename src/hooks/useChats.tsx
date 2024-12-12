import { createNewChatAPI, getAllChatAPI, getMessagesAPI } from "@/API";
import { createChatData } from "@/types/type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateNewChat = () => 
    useMutation ({
        mutationFn: (data: createChatData) => createNewChatAPI({data})
    })

export const useGetAllChats = () => 
    useQuery({
        queryKey: ["all-chats"],
        queryFn: () => getAllChatAPI()
    })

export const useGetMessages = (chatId:string) => 
    useQuery({
        queryKey: ["messages", chatId],
        queryFn: () => getMessagesAPI(chatId)
    })