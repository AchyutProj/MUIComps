import {createContext, FC, useEffect, useMemo, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";

import type {LayoutProps} from "@anTypes/others.ts";

export const ColorModeContext = createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleColorMode: () => {},
});
const ThemeWrapper : FC<LayoutProps> = ({children}) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: import.meta.env.VITE_PRIMARY_COLOR || 'rgba(0, 0, 0, 1)'
                    },
                    secondary: {
                        main: import.meta.env.VITE_SECONDARY_COLOR || 'rgba(0, 0, 0, 1)'
                    }
                }
            }),
        [mode],
    );

    useEffect(() => {
        localStorage.setItem('theme', mode);
    }, [mode]);

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme === 'dark') {
            setMode('dark');
        }
    }, []);

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    );
}

export default ThemeWrapper;