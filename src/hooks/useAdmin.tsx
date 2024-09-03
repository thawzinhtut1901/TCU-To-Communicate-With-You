import { usersAccount, usersGroups } from "@/API";
import { useQuery } from "@tanstack/react-query";

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