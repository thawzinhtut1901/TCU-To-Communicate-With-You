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
import { userStatusAPI } from "./AdminAPI";
import { userGenderAPI } from "./AdminAPI";
import { totalGroupsCountAPI } from "./AdminAPI";
import { totalUsersCountAPI } from "./AdminAPI";
import { newUsersCountAPI } from "./AdminAPI";
import { newGroupsCountAPI } from "./AdminAPI";
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
    userStatusAPI,
    userGenderAPI,
    totalGroupsCountAPI,
    totalUsersCountAPI,
    newUsersCountAPI,
    newGroupsCountAPI,
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
};
