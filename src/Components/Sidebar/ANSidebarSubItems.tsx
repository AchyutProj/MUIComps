import {Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import type {SidebarItem} from "@anTypes/others.ts";
import ANSubNavLink from "@anComps/Bases/ANSubNavLink.tsx";

const ANSidebarSubItems = (props: {
    subItems: SidebarItem[],
    open: boolean
}) => {
    const {subItems, open} = props;
    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="nav" disablePadding
                  sx={{
                      width: '100%',
                  }}
            >
                {subItems.map((subItem: SidebarItem, subItemIndex: number) => {
                        return (
                            <ListItem key={`sideBarSubItem-${subItemIndex}`}
                                      disablePadding
                                      component={
                                          props => <ANSubNavLink {...props} to={subItem.route ?? "/"}/>
                                      }
                                      sx={{
                                          marginBottom: '5px'
                                      }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <subItem.icon/>
                                    </ListItemIcon>
                                    <ListItemText primary={subItem.name}/>
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                )}
            </List>
        </Collapse>
    );
}

export default ANSidebarSubItems;