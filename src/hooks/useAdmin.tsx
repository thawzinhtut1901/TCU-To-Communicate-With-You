import { addAdmins, getAdminsData, removeAdmin, totalGroupsCountAPI, userGenderAPI, usersAccount, usersGroups, userStatusAPI, totalUsersCountAPI, newUsersCountAPI, newGroupsCountAPI, createAdminAPI } from "@/API";
import { AuthData } from "@/types/type";
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
        mutationFn: (userId : number) => addAdmins({userId}),
    })

export const useCreateAdmin = () => 
    useMutation({
        mutationFn: (data: AuthData) => createAdminAPI({data}),
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

export const useGetTotalGroupsCount = () => 
    useQuery({
        queryKey: ["total-groups"], queryFn:() => totalGroupsCountAPI()
    })

export const useGetTotalUsersCount = () => 
    useQuery({
        queryKey: ["total-users"], queryFn:() => totalUsersCountAPI()
    })

export const useGetNewUsersCount = () => 
    useQuery({
        queryKey: ["new-users"], queryFn:() => newUsersCountAPI()
    })

export const useGetNewGroupsCount = () => 
    useQuery({
        queryKey: ["new-groups"], queryFn:() => newGroupsCountAPI()
    })