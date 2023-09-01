import {FC} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

import type {LayoutProps} from "@anTypes/others.ts";

const AuthWrapper: FC<LayoutProps> = ({children}) => {
    const loc = useLocation();

    const authContext = useSelector((state: any) => state.authReducer);

    if (!authContext.isLoggedIn) {
        if (loc.pathname !== "/login") {
            window.location.href = "/login";
        }
    }

    return <>{children}</>;
}

export default AuthWrapper;