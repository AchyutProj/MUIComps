import {
    AppBar,
    Box,
    Drawer,
    useTheme
} from "@mui/material";
import ANNavbar from "@anComps/Bases/ANNavbar.tsx";
import ANSidebarDrawer from "@anComps/Sidebar/ANSidebarDrawer.tsx";

const ANSidebar = (props: {
    drawerWidth: number
}) => {

    const drawerWidth = props.drawerWidth;

    const theme = useTheme();

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                    backgroundColor: theme.palette.mode === 'light' ? 'rgba(250, 251, 251, 1)' : 'rgba(35, 35, 35, 1)',
                    color: theme.palette.mode === 'light' ? 'rgba(125, 125, 125, 1)' : 'rgba(250, 251, 251, 1)',
                }}
                elevation={1}
            >
                <ANNavbar/>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    PaperProps={{
                        elevation: 1,
                        style: {
                            backgroundColor: theme.palette.mode === 'light' ? 'rgba(250, 251, 251, 1)' : 'rgba(35, 35, 35, 1)',
                        }
                    }}
                >
                    <ANSidebarDrawer/>
                </Drawer>
            </Box>
        </>
    );
}

export default ANSidebar;