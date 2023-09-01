import ANSidebar from "@anComps/Sidebar/ANSidebar.tsx";
import {Box, CssBaseline, Toolbar} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {Toaster} from "react-hot-toast";

import type {LayoutProps} from "@anTypes/others.ts";

const ANLayout = ({ children }: LayoutProps) => {

    const [drawerWidth, setDrawerWidth]: [ number, Dispatch<SetStateAction<number>>] = useState(240);

    const authContext = useSelector((state: any) => state.authReducer);
    const isLoggedIn = authContext.isLoggedIn;

    useEffect(() => {
        setDrawerWidth(240);
    }, []);

    return (
        <>
            <Box sx={{
                display: 'flex',
                bgcolor: 'background.default',
                color: 'text.primary',
            }}>
                <CssBaseline enableColorScheme/>
                {isLoggedIn && <ANSidebar drawerWidth={drawerWidth} />}
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: isLoggedIn ? 3 : 0,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
                >
                    {isLoggedIn && <Toolbar />}
                    {children}
                </Box>
            </Box>
            <Toaster toastOptions={{
                position: "bottom-right",
                duration: 3000,
            }}/>
        </>
    );
}

export default ANLayout;