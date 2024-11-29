import { SignUpAPI } from "../API/AuthAPI";
import { SignInAPI } from "../API/AuthAPI";
import { forgetPasswordAPI } from "../API/AuthAPI";
import { resetPswAPI } from "../API/AuthAPI";
import { newPasswordAPI } from "../API/AuthAPI";
import { profileSetupAPI } from "../API/AuthAPI";
import { getPublishQuotes } from "./HomeAPI";
import { getMe } from "./UserAPI";
import { usersAccount } from "./AdminAPI";
import { usersGroups } from "./AdminAPI";
import { addAdmins } from "./AdminAPI";
import { getAdminsData } from "./AdminAPI";
import { updateMe } from "./UserAPI";
import { googleLogin } from "../API/AuthAPI";
import { removeAdmin } from "./AdminAPI";
import { getAllFriendsAPI } from "./UserAPI";
import { createAdminAPI } from "./AdminAPI";
import { createQuoteAdminAPI } from "./AdminAPI";
import { getAllQuoteAdminAPI } from "./AdminAPI";
import { quoteDeleteAPI } from "./AdminAPI";
import { quoteApproveAdminAPI } from "./AdminAPI";
import { getOneQuoeAdminAPI } from "./AdminAPI";
import { publishQuoteAPI } from "./AdminAPI";
import { validateUsersApi } from "./AdminAPI";
import { adminDeleteUsersAPI } from "./AdminAPI";
import { getSuggestedFriAPI } from "./UserAPI";
import { addFriendAPI } from "./UserAPI";
import { invalidateUsersAPI } from "./AdminAPI";
import { approveValidateUserAPI } from "./AdminAPI";
import { getAllDashboardCountAPI } from "./AdminAPI";
import { deleteUserAccountAPI } from "./UserAPI";
import { getAllFriendsRequestAPI } from "./UserAPI";
import { getFindUserAPI } from "./UserAPI";
import { acceptRequestApi } from "./UserAPI";
import { cancelRequestApi } from "./UserAPI";
import { createQuoteAPI } from "./UserAPI";
import { getAllChatAPI } from "./ChatAPI";

export { 
    SignUpAPI, 
    SignInAPI,
    forgetPasswordAPI,
    resetPswAPI,
    newPasswordAPI,
    profileSetupAPI,
    getPublishQuotes,
    getMe,
    usersAccount,
    usersGroups,
    addAdmins,
    getAdminsData,
    updateMe,
    googleLogin,
    removeAdmin,
    getAllFriendsAPI,
    createAdminAPI,
    createQuoteAdminAPI,
    getAllQuoteAdminAPI,
    quoteDeleteAPI,
    quoteApproveAdminAPI,
    getOneQuoeAdminAPI,
    publishQuoteAPI,
    validateUsersApi,
    adminDeleteUsersAPI,
    getSuggestedFriAPI,
    addFriendAPI,
    invalidateUsersAPI,
    approveValidateUserAPI,
    getAllDashboardCountAPI,
    deleteUserAccountAPI,
    getAllFriendsRequestAPI,
    getFindUserAPI,
    acceptRequestApi,
    cancelRequestApi,
    createQuoteAPI,
    getAllChatAPI,
};
