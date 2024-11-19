import BaseURL from "@/services/ApiEndPoint";
import { getToken } from "@/services/authService";
import { updateProfileData } from "@/types/type"

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

// export const getAllFriendsAPI = async() => {
//     const token = getToken();
//     const response:Response = await fetch(`${BaseURL}/friends`, {
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//         mode: "cors",
//         method: "GET",
//         redirect: "follow",
//     });
//     const result = await response.json();
//     if(!response.ok){
//         throw new Error(result.message);
//     }
//     return result;
// }

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