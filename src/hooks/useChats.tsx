import { createMessageAPI, createNewChatAPI, getAChatAPI, getAllChatAPI, getMessagesAPI } from "@/API";
import { createChatData, CreateMessageData } from "@/types/type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateNewChat = () => 
    useMutation ({
        mutationFn: (data: createChatData) => createNewChatAPI({data})
    })

export const useGetAllChats = () => 
    useQuery({
        queryKey: ["allchats"],
        queryFn: () => getAllChatAPI(),
    })

export const useGetMessages = (chatId:string) => 
    useQuery({
        queryKey: ["messages", chatId],
        queryFn: () => getMessagesAPI(chatId),
    })

export const useGetAChat = (chatId:string) => 
    useQuery({
        queryKey: ["a-chat", chatId],
        queryFn: () => getAChatAPI(chatId),
    })

export const useCreateMessages = () => 
    useMutation({
        mutationFn: (data: CreateMessageData) => createMessageAPI({data})
    })