import {IconButton, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ANThemeSwitch from "@anComps/Sidebar/ANThemeSwitch.tsx";
import {useDispatch} from "react-redux";
import ANNavTitle from "@anComps/Bases/ANNavTitle.tsx";
import ANBreadCrumb from "@anComps/Bases/ANBreadCrumb.tsx";

const ANNavbar = () => {
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        dispatch({type: 'TOGGLE_DRAWER'});
    };

    return (
        <>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>
                <ANNavTitle/>
                <ANBreadCrumb />
                <ANThemeSwitch/>
            </Toolbar>
        </>
    );
}

export default ANNavbar;