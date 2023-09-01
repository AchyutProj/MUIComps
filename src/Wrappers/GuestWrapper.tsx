import {FC} from "react";
import {useSelector} from "react-redux";

import type {LayoutProps} from "@anTypes/others.ts";

const GuestWrapper: FC<LayoutProps> = ({children}) => {

    const authContext = useSelector((state: any) => state.authReducer);

    if (authContext.isLoggedIn) {
        window.location.href = "/dashboard";
    }

    return <>{children}</>;
}

export default GuestWrapper;