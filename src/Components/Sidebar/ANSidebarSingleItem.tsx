import type {SidebarItem} from "@anTypes/others.ts";
import {forwardRef, useState} from "react";
import {Box, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import ANNavLink from "@anComps/Bases/ANNavLink.tsx";
import ANSidebarSubItems from "@anComps/Sidebar/ANSidebarSubItems.tsx";

const ANSidebarSingleItem = forwardRef((props: { item: SidebarItem }, ref) => {
    const [open, setOpen] = useState(false);
    const {item} = props;

    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <ListItem
            ref={ref}
            disablePadding
            component={
                props => item.route && !item.subItems ? <ANNavLink {...props} to={item.route ?? "/"}/> :
                    <Box {...props}/>
            }
            sx={{
                width: '100%',
                maxWidth: 240,
                flexDirection: 'column'
            }}
        >
            <ListItemButton onClick={handleOpen} sx={{
                width: '100%'
            }}>
                <ListItemIcon>
                    <item.icon/>
                </ListItemIcon>
                <ListItemText primary={item.name}/>
                {item.subItems && (
                    <>
                        {
                            open ? <ExpandLess/> : <ExpandMore/>
                        }
                    </>
                )}
            </ListItemButton>
            {item.subItems && <ANSidebarSubItems subItems={item.subItems} open={open}/>}
        </ListItem>
    )
})

export default ANSidebarSingleItem;