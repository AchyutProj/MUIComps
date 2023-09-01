import type {BreadCrumbItem, BreadCrumbsProps} from "@anTypes/others.ts";
import {Breadcrumbs, Link, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {useSelector} from "react-redux";

const ANBreadCrumb = () => {
    const anContext = useSelector((state: any) => state.anReducer);
    const breadCrumbs: BreadCrumbsProps = anContext.breadcrumbs;
    const crumbs: BreadCrumbItem[] = breadCrumbs?.crumbs;
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                {crumbs?.map((crumb: BreadCrumbItem, index: number) => {
                    const {title, link} = crumb;
                    if (index < crumbs.length - 1 && link) {
                        return (
                            <Link
                                key={`link-${link}-${index}`}
                                component={RouterLink}
                                underline="hover"
                                color="inherit"
                                to={link}
                            >
                                {title}
                            </Link>
                        )
                    }
                    return (
                        <Typography key={`text-${link}-${index}`} color="text.primary">
                            {title}
                        </Typography>
                    )
                })}
            </Breadcrumbs>
        </>
    );
}

export default ANBreadCrumb;