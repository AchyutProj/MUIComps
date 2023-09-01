import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {APP_NAME} from "@an/env";

export default function usePageTitle(title: string) {
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = title + ' | ' + APP_NAME;
        dispatch({type: "SET_PAGE_TITLE", payload: title});
    }, [title]);

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            document.title = APP_NAME;
        }
    }, []);
}