import {TextField} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import type {ANTextFieldProps} from "@anTypes/formFields.ts";
import {forwardRef} from "react";

const ANTextField = forwardRef<HTMLInputElement, ANTextFieldProps>(
    (props, ref) => {
    const { name, required, validate, label, error, helperText, ...rest } = props;

    const {control} = useFormContext();

    return (
        <>
            <Controller
                name={name}
                rules={{ required: required && "Required", validate }}
                control={control}
                render={
                    ({
                         field,
                         fieldState: {
                             error: errorField
                         }
                    }) => (
                        <TextField
                            {...rest}
                            {...field}
                            ref={ref}
                            label={required ? `${label} *` : label}
                            type={props.type ?? "text"}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={error ?? !!errorField?.message}
                            helperText={helperText ?? errorField?.message}
                        />
                    )
                }
            />
        </>
    );
});

export default ANTextField;