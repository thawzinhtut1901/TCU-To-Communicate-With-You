import { getAllChatAPI } from "@/API";
import { useQuery } from "@tanstack/react-query";

export const useGetAllChats = () => 
    useQuery({
        queryKey: ["all-chats"],
        queryFn: () => getAllChatAPI()
    })