import { addAdmins, getAdminsData, removeAdmin, userGenderAPI, usersAccount, usersGroups, userStatusAPI } from "@/API";
import { AddAdminsData } from "@/types/type";
import { useMutation, useQuery } from "@tanstack/react-query";

interface getUserAccountParams {
    sortBy?: string;
    search?: string;
    pageCount?: number;
    limit?: number;
}
    
export const useFetchUsersAccountDetails = (params: getUserAccountParams) => 
    useQuery({queryKey:["accounts", params], queryFn: () => usersAccount(params)});

interface getUserGroupParams {
    sortBy?: string;
    search?: string;
    pageCount?: number;
    limit?: number;
}

export const useFetchUsersGroups = (params: getUserGroupParams) => 
    useQuery({queryKey:["groups", params], queryFn: () => usersGroups(params)});

export const useAddAdmins = () => 
    useMutation({
        mutationFn: (data: AddAdminsData) => addAdmins({data}),
    })

interface getAdminsParams {
    sortBy?: string;
    search?: string;
    pageCount?: number;
    limit?: number;
}
export const useFetchAdmins = (params: getAdminsParams) => 
    useQuery({queryKey: ["admins", params], queryFn:() => getAdminsData(params)});


export const useRemoveAdmin = () => 
    useMutation({
        mutationFn: (userId : number) => removeAdmin({userId})
    })

export const useGetUserStatus = () => 
    useQuery({
        queryKey: ["user-status"], queryFn:() => userStatusAPI()
    })

export const useGetUserGender = () => 
    useQuery({
        queryKey: ["user-gender"], queryFn:() => userGenderAPI()
    })