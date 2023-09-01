import {BreadCrumbItem, BreadCrumbsProps} from "@anTypes/others.ts";
import {APP_NAME} from "@an/env";

interface ANState {
    drawerIsOpen: boolean;
    pageTitle: string;
    breadcrumbs: BreadCrumbsProps;
}

const anState : ANState = {
    drawerIsOpen: false,
    pageTitle: APP_NAME,
    breadcrumbs: {
        crumbs: [{} as BreadCrumbItem]
    }
};

const anReducer = (state : ANState = anState, action: any) => {
    switch (action.type) {
        case "TOGGLE_DRAWER":
            return {
                ...state,
                drawerIsOpen: !state.drawerIsOpen
            };
        case "SET_PAGE_TITLE":
            return {
                ...state,
                pageTitle: action.payload
            };
        case "SET_BREADCRUMBS":
            return {
                ...state,
                breadcrumbs: action.payload
            }
        default:
            return state;
    }
}

export default anReducer;