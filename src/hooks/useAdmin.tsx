import { userAccountStatus } from "@/API";
import { useQuery } from "@tanstack/react-query";

export const getUserAccountType = () => 
    useQuery({
        queryKey: ["account-type"],
        queryFn: () => userAccountStatus()
    })