import {styled} from "@mui/system";
import {NavLink} from "react-router-dom";
import {Link} from "@mui/material";

const ANSubNavLink  = styled((props: {
    to?: string,
    onClick?: () => void,
}) => (
    <>
        {props.to && <NavLink to={props.to} {...props} />}
        {props.onClick && <Link onClick={props.onClick} {...props} />}
    </>
))(({theme}) => ({
    textDecoration: 'none',
    color: theme.palette.mode === 'light' ? 'rgba(125, 125, 125, 1)' : 'rgba(250, 251, 251, 1)',
    borderRadius: '10px',
    '&.active': {
        color: theme.palette.mode === 'light' ? 'rgba(250, 251, 251, 1)' : 'rgba(250, 251, 251, 1)',
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(125, 194, 77, 1)' : 'rgba(125, 194, 77, 0.5)',
        fontWeight: 400,
        fontSize: '24px',
    },
}));

export default ANSubNavLink;