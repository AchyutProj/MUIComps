import {Button} from "@mui/material";
import type {ButtonProps} from "@mui/material/Button";

const ANButton = ({ children, ...props } : ButtonProps) => {
    return (
        <>
            <Button
                {...props}
                variant={props.variant ?? "contained"}
                color={props.color ?? "primary"}
                fullWidth={props.fullWidth ?? false}
                startIcon={props.startIcon ?? false}
                disabled={props.disabled ?? false}
                sx={{
                    ...props.sx,
                    mt: 2,
                    py: 2,
                }}
            >
                {children}
            </Button>
        </>
    );
}

export default ANButton;