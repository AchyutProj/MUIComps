import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {BreadCrumbItem} from "@anTypes/others.ts";

export default function useBreadCrumb(crumbs: BreadCrumbItem[]) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "SET_BREADCRUMBS",
            payload: {
                crumbs: crumbs
            }
        });
    }, [crumbs]);
}