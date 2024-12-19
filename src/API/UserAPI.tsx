import { BaseURL } from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService";
import { updateProfileData, userDeleteAccountData, userPublicQuotesData } from "@/types/type"

export const getMe = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/users/me`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.ok) {
        throw new Error(result.message);
    }
    return result;
};

export const updateMe = async(
    {data} :
    {data: updateProfileData}
) => {
    const token = getToken();
    const formData = new FormData();
    formData.append("userName", data.userName);
    formData.append("displayName", data.displayName);

    if(data.profilePicture) {
        formData.append("profilePicture", data.profilePicture);
    };

    if(data.bio){
        formData.append("bio", data.bio)
    };

    if(data.gender) {
        formData.append("gender", data.gender)
      };

    if(data.dateOfBirth) {
        formData.append("dateOfBirth", data.dateOfBirth);
    }

    const response: Response = await fetch(`${BaseURL}/users`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "PATCH",
        redirect: "follow",
        body: formData,
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    }
    return result;
}

export const getMyProfileAPI = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/users/profile`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.ok) {
        throw new Error(result.message);
    }
    return result;
};

export const getAllFriendsAPI = async() => {
    const token = getToken();
    const status = "Accepted"
    const response:Response = await fetch(`${BaseURL}/friends?status=${status}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        mode: "cors",
        method: "GET",
        redirect: "follow"
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message);
    }
    
    return result;
}

export const getAllFriendsRequestAPI = async() => {
    const token = getToken();
    const status = "Request"
    const response:Response = await fetch(`${BaseURL}/friends?status=${status}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        mode: "cors",
        method: "GET",
        redirect: "follow"
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message);
    }
    
    return result;
}

interface getFindUserParams {
    search?: string;
}

export const getFindUserAPI = async (params: getFindUserParams = {}) => {
    const {search} = params;

    const queryParams = new URLSearchParams();

    if(search) {
        queryParams.append("search", search)
    };

    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/users?${queryParams}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.ok){
        throw new Error (result.message);
    };
    return result;
}

export const getSuggestedFriAPI = async() => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/users/suggested`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.ok){
        throw new Error (result.message);
    };
    return result;
}

export const addFriendAPI = async ({friendId}: {friendId:number}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/friends`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({friendId})
    });
    const result = await response.json();
    if(!response.json){
        throw new Error(result.message)
    }
    return result;
}

export const unfriendAPI = async({friendId} : {friendId:number}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/friends/unfriend/${friendId}`, {
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
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}

export const acceptRequestApi = async({friendId} : {friendId:number}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/friends/accept/${friendId}`, {
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
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}

export const cancelRejectApi = async({friendId} : {friendId:number}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/friends/reject/${friendId}`, {
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
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}

export const cancelRequestApi = async({userId} : {userId: number}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/friends/cancel/${userId}`, {
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
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}

export const deleteUserAccountAPI = async(
    {data} :
    {data: userDeleteAccountData}
) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/users`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "DELETE",
        redirect: "follow",
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}

export const createQuoteAPI = async ({data} : {data: userPublicQuotesData}) => {
    const token = getToken();
    const response: Response = await fetch(`${BaseURL}/quotes`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "POST",
        redirect: "follow",
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}

export const findAUserAPI = async({userId} : {userId: number}) => {
    const token = getToken();
    const response:Response = await fetch(`${BaseURL}/users/${userId}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        method: "GET",
        redirect: "follow",
    });
    const result = await response.json();
    if(!response.json) {
        throw new Error(result.message)
    };
    return result;
}