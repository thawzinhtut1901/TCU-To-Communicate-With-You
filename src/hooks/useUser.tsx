import { getAllFriendsAPI, getMe, updateMe } from "@/API";
import { updateProfileData } from "@/types/type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetMe = () => 
    useQuery({queryKey: ["me"], queryFn: () => getMe()});

export const useUpdateMe = () => 
    useMutation({
        mutationFn: (data: updateProfileData) => updateMe({data}),
      });

export const useGetAllFriends = () => 
    useQuery({queryKey: ["friends"], queryFn: () => getAllFriendsAPI()});