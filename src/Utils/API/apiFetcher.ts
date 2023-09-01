import toast from "react-hot-toast";
import {LOGIN_TOKEN, VITE_API_ENDPOINT} from "@an/env";

export const anFetch = (url: string, body?: any, method?: string, header?: any) => {
    return fetch(VITE_API_ENDPOINT + url, {
        method: method ?? "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...header
        },
        body: body ? JSON.stringify(body) : undefined
    })
        .then((response) => {
            if (response.status !== 200) {

                response.json().then((data) => {
                    if (data.errors) {
                        Object.keys(data.errors).map((errorMsg) => {
                            toast.error(data.errors[errorMsg]);
                        });
                    } else {
                        toast.error(data.message);
                    }
                });

                if(response.status === 401) {
                    localStorage.removeItem(LOGIN_TOKEN);
                    window.location.href = "/login";
                }

                throw response.statusText;
            } else {
                return response;
            }
        }).then((response) => {
            return response.json();
        });

}

export const anAuthFetch = (url: string, body?: any, method?: string) => {
    return anFetch(url, {
        ...body,
    }, method, {
        'Authorization': 'Bearer ' + localStorage.getItem(LOGIN_TOKEN)
    });
}