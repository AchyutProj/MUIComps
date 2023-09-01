import usePageTitle from "@anHooks/usePageTitle.ts";
import useBreadCrumb from "@anHooks/useBreadCrumb.ts";
import {APP_NAME} from "@an/env";

function Dashboard() {

    usePageTitle('Dashboard');
    useBreadCrumb([
        {
            title: "Dashboard",
            link: "/dashboard"
        },
    ])

    return (
        <>
            {APP_NAME}
        </>
    )
}

export default Dashboard
