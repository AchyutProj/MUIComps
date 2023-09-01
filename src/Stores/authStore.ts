import {LOGIN_TOKEN, USER_VALUE} from "@an/env";

const token : string|null = localStorage.getItem(LOGIN_TOKEN) ?? null;

interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    user: any
}

const authState = {
    isLoggedIn: !!token,
    token: token,
    user: null
};

const authReducer = (state : AuthState = authState, action: any) => {

    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true
            };
        case "SET_TOKEN":
            localStorage.setItem(LOGIN_TOKEN, action.payload);
            return {
                ...state,
                token: action.payload
            };
        case "SET_USER":
            localStorage.setItem(USER_VALUE, JSON.stringify(action.payload, null, 2));
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;