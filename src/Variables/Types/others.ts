import {SvgIconComponent} from "@mui/icons-material";
import {ReactNode} from "react";

export interface SidebarItem {
    name?: string;
    name_np?: string;
    icon: SvgIconComponent;
    route?: string;
    subItems?: SidebarItem[];
}

export interface LayoutProps {
    children: ReactNode;
}

export interface ANAccordianProps {
    title: string,
    children: ReactNode
}

export interface BreadCrumbItem {
    link?: string;
    title: string;
}
export interface BreadCrumbsProps {
    crumbs: BreadCrumbItem[];
}