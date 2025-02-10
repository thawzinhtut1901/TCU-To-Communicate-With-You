import { createGroupAPI, createMessageAPI, createNewChatAPI, getAChatAPI, getAGroupChat, getAllChatAPI, getChatMessagesAPI, getGroupMessagesAPI } from "@/API";
import { createChatData, createGroupData, CreateMessageData } from "@/types/type";
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
        queryFn: () => getChatMessagesAPI(chatId),
    })

export const useGetGroupMessages = (groupChatId:string) => 
    useQuery({
        queryKey: ["groupmessages", groupChatId],
        queryFn: () => getGroupMessagesAPI(groupChatId),
    })

export const useGetAChat = (chatId:string, enabled: boolean) => 
    useQuery({
        queryKey: ["a-chat", chatId],
        queryFn: () => getAChatAPI(chatId),
        enabled,
    })

export const useCreateMessages = () => 
    useMutation({
        mutationFn: (data: CreateMessageData) => createMessageAPI({data})
    })

export const useCreateGroup = () => 
    useMutation({
        mutationFn: (data: createGroupData) => createGroupAPI({data})
    })

export const useGetAGroupChat = (groupChatId:string, enabled: boolean) => 
    useQuery({
        queryKey: ["group-chat", groupChatId],
        queryFn: () => getAGroupChat(groupChatId),
        enabled,
})