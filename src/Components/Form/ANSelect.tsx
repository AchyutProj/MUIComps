import {forwardRef} from "react";
import type {ANSelectFieldProps, ANSelectProps} from "@anTypes/formFields.ts";
import {Autocomplete, MenuItem, TextField} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";

export const ANSelectField = forwardRef<HTMLInputElement, ANSelectFieldProps>(
    (props, ref) => {
        const {options, id = "multi-select-field", name, label, error, helperText, setValue} = props;
        return (
            <Autocomplete
                options={options}
                getOptionDisabled={(option) => option.disabled || option.value === ""}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                renderInput={(rest) => {
                    return (
                        <TextField
                            {...rest}
                            ref={ref}
                            id={id}
                            label={label}
                            name={name}
                            margin={"normal"}
                            helperText={helperText}
                            error={error}
                        />
                    )
                }}
                renderOption={(props, option) => {
                    return (
                        <>
                            <MenuItem
                                {...props}
                                value={option.value}
                                sx={{justifyContent: "space-between"}}
                            >
                                {option.label}
                            </MenuItem>
                        </>
                    )
                }}
                onChange={(e, value) => {
                    !e.currentTarget && console.log(e.currentTarget ?? "Safa Urja");
                    setValue(id, value?.value ?? null);
                }}
            />
        );
    }
);

const ANSelect = (props: ANSelectProps) => {
    const {name, required, validate, label, ...rest} = props;
    const {control, setValue} = useFormContext();

    return (
        <>
            <Controller
                name={name}
                rules={{required: required && "Required", validate}}
                control={control}
                render={({
                             field,
                             fieldState: {error}
                         }) => {
                    return (
                        <ANSelectField
                            {...rest}
                            {...field}
                            label={required ? `${label} *` : label}
                            error={error ? !!error?.message : undefined}
                            helperText={error?.message}
                            setValue={setValue}
                        />
                    );
                }}
            />
        </>
    );
}

export default ANSelect;