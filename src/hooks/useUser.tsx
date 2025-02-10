import { acceptRequestApi, addFriendAPI, cancelRejectApi , cancelRequestApi, createQuoteAPI, deleteUserAccountAPI, findAUserAPI, getAllFriendsAPI, getAllFriendsRequestAPI, getFindUserAPI, getMe, getOthersProfileAPI, getSuggestedFriAPI, quoteRankAPI, unfriendAPI, updateMe, voteQuoteAPI } from "@/API";
import { updateProfileData, userDeleteAccountData, userPublicQuotesData } from "@/types/type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetMe = () => 
    useQuery({queryKey: ["me"], queryFn: () => getMe()});

export const useUpdateMe = () => 
    useMutation({
        mutationFn: (data: updateProfileData) => updateMe({data}),
      });

export const useGetOthersProfile = ({userId} : {userId: number}) => 
    useQuery({
        queryKey: ["others-profile", userId], queryFn: () => getOthersProfileAPI({userId})
    })

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

export const useUnfriend = () => 
    useMutation({
        mutationFn: (friendId: number) => unfriendAPI({friendId})
    })

export const useAcceptRequest = () => 
    useMutation({
        mutationFn: (friendId: number) => acceptRequestApi({friendId})
    })

export const useCancelReject = () => 
    useMutation({
        mutationFn: (friendId: number) => cancelRejectApi({friendId})
    })

export const useCancelRequest = () => 
    useMutation({
        mutationFn: (userId: number) => cancelRequestApi({userId})
    })

export const useDeleteUserAccount = () => 
    useMutation({
        mutationFn: (data: userDeleteAccountData) => deleteUserAccountAPI({data})
    })

export const useCreateQuote = () => 
    useMutation({
        mutationFn: (data: userPublicQuotesData) => createQuoteAPI({data})
    })

export const useGetFindAUser = ({userId} : {userId:number}) => 
    useQuery({
        queryKey: ["find-a-user", userId],
        queryFn: () => findAUserAPI({userId})
    })

export const usevoteQuote = () => 
    useMutation({
        mutationFn: (quoteId: number) => voteQuoteAPI({quoteId})
    })

export const useGetQuoteRank = () => 
    useQuery({
        queryKey: ["quote-rank"],
        queryFn: () => quoteRankAPI()
    })