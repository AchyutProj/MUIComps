import {Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import {sidebarItems} from "./sidebarItems.ts";
import type {SidebarItem} from "@anTypes/others.ts";
import {Fragment} from "react";
import ANSidebarSingleItem from "@anComps/Sidebar/ANSidebarSingleItem.tsx";
import ANNavLink from "@anComps/Bases/ANNavLink.tsx";
import {Logout} from "@mui/icons-material";
import {LOGIN_TOKEN} from "@an/env";

const ANSidebarDrawer = () => {
    return (
        <>
            <Toolbar/>
            {sidebarItems.map((items: SidebarItem[], index: number) => {
                return (
                    <Fragment key={`sideBarSection-${index}`}>
                        <Divider/>
                        <List
                            component="nav"
                            aria-labelledby="an-sidebar-list"
                            sx={{
                                width: '100%',
                                maxWidth: 240,
                                bgcolor: 'background.paper',
                            }}>
                            {items.map((item: SidebarItem, subIndex: number) => (
                                <ANSidebarSingleItem item={item} key={`sideBarItem-${index}-${subIndex}`}/>
                            ))}
                        </List>
                    </Fragment>
                );
            })}
            <Divider/>
            <List>
                <ListItem
                    disablePadding
                    component={
                        props => <ANNavLink
                            onClick={() => {
                                localStorage.removeItem(LOGIN_TOKEN);
                                window.location.href = '/login';
                            }}
                            {...props}
                        />
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <Logout/>
                        </ListItemIcon>
                        <ListItemText primary="Logout"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
};

export default ANSidebarDrawer;