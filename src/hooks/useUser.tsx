import { acceptRequestApi, addFriendAPI, cancelRequestApi, createQuoteAPI, deleteUserAccountAPI, getAllFriendsAPI, getAllFriendsRequestAPI, getFindUserAPI, getMe, getSuggestedFriAPI, updateMe } from "@/API";
import { updateProfileData, userDeleteAccountData, userPublicQuotesData } from "@/types/type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetMe = () => 
    useQuery({queryKey: ["me"], queryFn: () => getMe()});

export const useUpdateMe = () => 
    useMutation({
        mutationFn: (data: updateProfileData) => updateMe({data}),
      });

export const useGetAllFriends = () => 
    useQuery({queryKey: ["friends"], queryFn: () => getAllFriendsAPI()});

export const useGetAllFriendRequest = () => 
    useQuery({queryKey: ["friend-request"], queryFn: () => getAllFriendsRequestAPI()});

export const useGetAllSuggestedFri = () => 
    useQuery({
        queryKey: ["suggest-fr"],
        queryFn: () => getSuggestedFriAPI()
    });

interface getFindUserParams {
    search?: string;
}

export const useGetFindUsers = (params: getFindUserParams) => 
    useQuery({
        queryKey: ["find-user-acc", params], 
        queryFn: () => getFindUserAPI(params)
    });

export const useAddFriend = () => 
    useMutation({
        mutationFn: (friendId: number) => addFriendAPI({friendId})
    })

export const useAcceptRequest = () => 
    useMutation({
        mutationFn: (friendId: number) => acceptRequestApi({friendId})
    })

export const useCancelRequest = () => 
    useMutation({
        mutationFn: (friendId: number) => cancelRequestApi({friendId})
    })

export const useDeleteUserAccount = () => 
    useMutation({
        mutationFn: (data: userDeleteAccountData) => deleteUserAccountAPI({data})
    })

export const useCreateQuote = () => 
    useMutation({
        mutationFn: (data: userPublicQuotesData) => createQuoteAPI({data})
    })