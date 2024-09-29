import BaseURL from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService"
import { AddAdminsData } from "@/types/type";

interface getUserAccountParams {
    sortBy?: string;
    search?: string;
    pageCount?: number;
    limit?: number;
}

export const usersAccount = async(params: getUserAccountParams = {}) => {
    const {search, sortBy, pageCount, limit = 10} = params;

    const queryParams = new URLSearchParams();

    if(pageCount) {
        queryParams.append("page", pageCount.toString())
    };

    if(search) {
        queryParams.append("search", search);
    };

    if(sortBy) {
        queryParams.append("sortBy" , sortBy)
    };

    queryParams.append("limit", limit.toString());

    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/admin-dashboard/user-data? ${queryParams.toString()}`, {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });

    const result = await response.json();
        if(!response.json) {
            throw new Error(result.message);
        }
        return result;
}

interface getUserGroupParams {
    sortBy?: string;
    search?: string;
    pageCount?: number;
    limit?: number;
}

export const usersGroups = async(params: getUserGroupParams = {}) => {
    const {search, sortBy, pageCount, limit = 10} = params;

    const queryParams = new URLSearchParams();

    if(pageCount) {
        queryParams.append("page", pageCount.toString())
    }
    if(search) {
        queryParams.append("search", search)
    }
    if(sortBy) {
        queryParams.append("sortBy", sortBy)
    }
    queryParams.append("limit", limit.toString());

    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/admin-dashboard/group-data? ${queryParams.toString()}`, {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });

    const result = await response.json();
        if(!response.json) {
            throw new Error(result.message);
        }
        return result;
}

export const addAdmins = async({data}: {data: AddAdminsData}) => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/admin-dashboard/user-to-admin`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        method: "PATCH",
        mode: "cors",
        redirect: "follow",
        body: JSON.stringify(data),
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message);
    }
    return result;
}

interface getAdminsParams {
    sortBy?: string;
    search?: string;
    pageCount?: number;
    limit?: number
}

export const getAdminsData = async(params: getAdminsParams = {}) => {
    const {search, sortBy, pageCount, limit = 10} = params;

    const queryParams = new URLSearchParams();

    if(pageCount) {
        queryParams.append("page", pageCount.toString())
    }
    if(search) {
        queryParams.append("search", search)
    }
    if(sortBy) {
        queryParams.append("sortBy", sortBy)
    }
    queryParams.append("limit", limit.toString());

    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/admin-dashboard/admin-data? ${queryParams.toString()}`, {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });

    const result = await response.json();
        if(!response.json) {
            throw new Error(result.message);
        }
        return result;
}


export const removeAdmin = async({userId} : {userId: number}) => {  
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/admin-dashboard/remove-admin/${userId}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "PATCH",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.json){
        throw new Error(result.message);
    };
    return result;
}

export const userStatusAPI = async () => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/admin-dashboard/user-status`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }, 
        mode: "cors",
        method: "GET",
        redirect: "follow"
    });
    const result = await response.json();
    if(!response.json){
        throw new Error(result.message);
    };
    return result;
}

export const userGenderAPI = async () => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/admin-dashboard/user-genders`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow"
    });
    const result = await response.json();
    if(!response.json){
        throw new Error(result.message);
    };
    return result;
}