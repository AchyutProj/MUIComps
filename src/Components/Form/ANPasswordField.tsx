import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import type {ANTextFieldProps} from "@anTypes/formFields.ts";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const ANPasswordField = (props: ANTextFieldProps ) => {
    const { name, required, validate, label, ...rest } = props;

    const {control} = useFormContext();

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Controller
                name={name}
                rules={{ required: required && "Required", validate }}
                control={control}
                render={
                    ({ field, fieldState: {error} }) => (
                        <TextField
                            {...rest}
                            {...field}
                            label={required ? `${label} *` : label}
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!error?.message}
                            helperText={error?.message}

                            autoComplete="off"

                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        <InputAdornment position="end">
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </InputAdornment>
                                    </IconButton>
                                ),
                            }}
                        />
                    )
                }
            />
        </>
    );
}
export default ANPasswordField;