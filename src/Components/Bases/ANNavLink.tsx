import {styled} from "@mui/system";
import {NavLink} from "react-router-dom";
import {Link} from "@mui/material";

const ANNavLink = styled((props: {
        to?: string,
        onClick?: () => void,
    }) => {
        const {to, onClick, ...other} = props;

        if (to) {
            return <NavLink to={to} {...other} />;
        } else if (onClick) {
            return <Link onClick={onClick} {...other} />;
        }

        return null;
    }
)(({theme}) => ({
    textDecoration: 'none',
    color: theme.palette.mode === 'light' ? 'rgba(125, 125, 125, 1)' : 'rgba(250, 251, 251, 1)',
    borderRadius: '0 18px 18px 0',
    '&.active': {
        color: theme.palette.mode === 'light' ? 'rgba(250, 251, 251, 1)' : 'rgba(250, 251, 251, 1)',
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(125, 194, 77, 1)' : 'rgba(125, 194, 77, 0.5)',
        fontWeight: 400,
        fontSize: '24px',
    },
}));

export default ANNavLink;