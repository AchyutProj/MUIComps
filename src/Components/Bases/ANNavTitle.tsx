import {Typography} from "@mui/material";
import {useSelector} from "react-redux";

const ANNavTitle = () => {

    const anContext = useSelector((state: any) => state.anReducer);

    return (
        <>
            <Typography variant="h5" noWrap component="div" sx={{
                flexGrow: 1,
                fontWeight: 'bold',
            }}>
                {anContext.pageTitle}
            </Typography>
        </>
    )
}

export default ANNavTitle;