import BaseURL from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService"
import { AuthData } from "@/types/type";

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
    const response:Response = await fetch(`${BaseURL}/dashboard/users? ${queryParams.toString()}`, {
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
    const response:Response = await fetch(`${BaseURL}/dashboard/groups? ${queryParams.toString()}`, {
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

export const addAdmins = async({userId} : {userId: number}) => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/dashboard/user-to-admin/${userId}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        method: "PATCH",
        mode: "cors",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message);
    }
    return result;
}

export const createAdminAPI = async ({data}: {data: AuthData}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/dashboard`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
        body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message);
    };
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
    const response:Response = await fetch(`${BaseURL}/dashboard/admins? ${queryParams.toString()}`, {
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
    const response:Response = await fetch(`${BaseURL}/dashboard/admins/remove/${userId}`, {
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
    const response: Response = await fetch(`${BaseURL}/dashboard/users/status/count`, {
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
    const response: Response = await fetch(`${BaseURL}/dashboard/users/gender/count`, {
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

export const totalGroupsCountAPI = async () => {
    const token = getToken();
    const response : Response = await fetch(`${BaseURL}/dashboard/groups/total/count`, {
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

export const totalUsersCountAPI = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/dashboard/users?getCount=true`, {
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

export const newUsersCountAPI = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/dashboard/users/new/count`, {
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

export const newGroupsCountAPI = async() => {
    const token = getToken();
    const response : Response = await fetch(`${BaseURL}/dashboard/groups/new/count`, {
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
