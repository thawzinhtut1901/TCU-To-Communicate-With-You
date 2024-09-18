import { addAdmins, getAdminsData, removeAdmin, usersAccount, usersGroups } from "@/API";
import { AddAdminsData } from "@/types/type";
import { useMutation, useQuery } from "@tanstack/react-query";

interface getUserAccountParams {
    // sortBy?: string;
    pageCount?: number;
    limit?: number;
}
    
export const useFetchUsersAccountDetails = (params: getUserAccountParams) => 
    useQuery({queryKey:["accounts", params], queryFn: () => usersAccount(params)});

interface getUserGroupParams {
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
    pageCount?: number;
    limit?: number;
}
export const useFetchAdmins = (params: getAdminsParams) => 
    useQuery({queryKey: ["admins", params], queryFn:() => getAdminsData(params)});

export const useRemoveAdmin = () => 
    useMutation({
        mutationFn: (data: AddAdminsData) => removeAdmin({data})
    })