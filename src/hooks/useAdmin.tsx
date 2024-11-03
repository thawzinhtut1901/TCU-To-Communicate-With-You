import { addAdmins, getAdminsData, removeAdmin, totalGroupsCountAPI, userGenderAPI, usersAccount, usersGroups, userStatusAPI, totalUsersCountAPI, newUsersCountAPI, newGroupsCountAPI, createAdminAPI, createQuoteAdminAPI, getAllQuoteAdminAPI, quoteDeleteAPI, quoteApproveAdminAPI, getOneQuoeAdminAPI, publishQuoteAPI, validateUsersApi, adminDeleteUsersAPI, invalidateUsersAPI, approveValidateUserAPI } from "@/API";
import { AuthData, userPublicQuotesData } from "@/types/type";
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

export const useCreateQuoteAdmin = () => 
    useMutation({
        mutationFn: (data: userPublicQuotesData) => createQuoteAdminAPI({data})
    })

interface getAdminQuoteParams {
    search?: string;
    status?: string;
    pageCount?: number;
    limit?: number;
}

export const useGetAllQuotes = (params: getAdminQuoteParams) => 
    useQuery({
        queryKey: ["all-quotes", params],
        queryFn: () => getAllQuoteAdminAPI(params)
    })

export const useAdminUpdateQuote = () => 
    useMutation({
        mutationFn: ({quoteId, status} : {quoteId: number, status: string}) => quoteApproveAdminAPI({quoteId} ,{data: {status}})
    })

export const useDeleteQuote = () => 
    useMutation({
        mutationFn: (quoteId: number) => quoteDeleteAPI({quoteId})
    });

export const useGetOneQuote = ({quoteId} : {quoteId:number}) => 
    useQuery({
        queryKey: ["one-quote", quoteId], 
        queryFn: () => getOneQuoeAdminAPI({quoteId})
    })

export const usePublishQuote = () => 
    useMutation({
        mutationFn: (quoteId : number) => publishQuoteAPI({quoteId})
    })

interface validateUserParams {
    pageCount?: number;
    limit?: number;
    search?: string;
}

export const useValidateUsers = (params: validateUserParams) => 
    useQuery({
        queryKey: ["validated", params],
        queryFn: () => validateUsersApi(params)
    });

export const useInvalidateUsers = (params: validateUserParams) => 
    useQuery({
        queryKey: ["invalidated", params],
        queryFn: () => invalidateUsersAPI(params)
    });

export const useApproveValidateUser = () => 
    useMutation({
        mutationFn: (userId:number) => approveValidateUserAPI({userId})
    })

export const useAdminDeleteUser = () => 
    useMutation({
        mutationFn: (userId: number) => adminDeleteUsersAPI({userId})
    })