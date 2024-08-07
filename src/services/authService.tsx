import Cookies from "js-cookie";

const TOKEN_KEY = "TCUSecurityToken";

export function login(token:string) {
    Cookies.set(TOKEN_KEY, token, {
        expires: 100,
        secure: true,
        sameSite: "strict",
    })
}

export function logout() {
    Cookies.remove(TOKEN_KEY);
    window.location.reload();
}

export function getToken() {
    return Cookies.get(TOKEN_KEY)
}