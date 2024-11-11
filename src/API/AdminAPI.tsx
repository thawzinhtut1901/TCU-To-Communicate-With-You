import BaseURL from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService"
import { AuthData, quoteAdminUpdateData, userPublicQuotesData } from "@/types/type";

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

export const getAllDashboardCountAPI = async() => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/dashboard`, {
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

export const createQuoteAdminAPI = async(
    {data} : {data: userPublicQuotesData}
) => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/quotes`, {
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        mode: "cors",
        method: "POST",
        redirect: "follow",
        body: JSON.stringify(data),
    });
    const result = await response.json();
    if(!result.ok){
        throw new Error(result.message);
    }
    return result;
}

interface getAdminQuoteParams {
    search?: string;
    status?: string;
    pageCount?: number;
    limit?: number
}

export const getAllQuoteAdminAPI = async(params : getAdminQuoteParams=({})) => {
    const {search, status, pageCount, limit=10} = params;

    const queryParams = new URLSearchParams();

    if(search) {
        queryParams.append("search", search)
    }
    if(status) {
        queryParams.append("status", status)
    }
    if(pageCount) {
        queryParams.append("page", pageCount.toString())
    }
    queryParams.append("limit", limit.toString());

    const token = getToken();
    const response : Response = await fetch(`${BaseURL}/quotes?${queryParams}`, {
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

export const quoteApproveAdminAPI = async(
    {quoteId} : {quoteId:number},
    {data} : {data:quoteAdminUpdateData}
) => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/quotes/${quoteId}`, {
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`,
        },
        mode: "cors",
        method: "PATCH",
        redirect: "follow",
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    }
    return result;
}

export const quoteDeleteAPI = async ({quoteId} : {quoteId: number}) => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/quotes/${quoteId}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "DELETE",
        redirect: "follow",
    });
    const result = await response.json();
    if(!result.ok) {
        throw new Error(result.message);
    }
    return result;
};

export const getOneQuoeAdminAPI = async ({quoteId} : {quoteId: number}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/quotes/${quoteId}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.json){
        throw new Error (result.message);
    };
    return result
}

export const publishQuoteAPI = async({quoteId} : {quoteId: number}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/quotes/publish/${quoteId}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`,
        },
        mode: "cors",
        method: "PATCH",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}

interface validateUserParams {
    pageCount?: number;
    limit?: number;
    search?: string;
}

export const validateUsersApi = async(params: validateUserParams=({})) => {
    const {pageCount, search, limit = 10} = params;

    const queryParams = new URLSearchParams();
    if(pageCount){
        queryParams.append("page" , pageCount.toString())
    };
    if(search) {
        queryParams.append("search", search)
    };
    queryParams.append("limit", limit.toString())
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/dashboard/users/validated?${queryParams}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error (result.message)
    };
    return result;
}

export const invalidateUsersAPI = async(params: validateUserParams=({})) => {
    const {pageCount, search, limit = 10} = params;

    const queryParams = new URLSearchParams();
    if(pageCount){
        queryParams.append("page" , pageCount.toString())
    };
    if(search) {
        queryParams.append("search", search)
    };
    queryParams.append("limit", limit.toString())
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/dashboard/users/invalidated`, {
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });

    const result = await response.json();
    if(!response.json) {
        throw new Error (result.message)
    };
    return result;
}

export const approveValidateUserAPI = async({userId} : {userId: number}) => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/dashboard/validateuser/${userId}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "PATCH",
        redirect: "follow"
    });
    const result = await response.json();
    if(!response.json){
        throw new Error(result.message)
    };
    return result;
}

export const adminDeleteUsersAPI = async({userId} : {userId:number}) => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/dashboard/users/delete/${userId}`, {
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "DELETE",
        redirect: "follow",
    });
    const result = await response.json();
    if(!result.ok) {
        throw new Error(result.message)
    };
    return result;
}