import type {ANDatepickerFieldProps, ANDatepickerProps} from "@anTypes/formFields.ts";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Controller, useFormContext} from "react-hook-form";
import {DateField, DateTimeField, TimeField} from "@mui/x-date-pickers";
import {forwardRef} from "react";

const ANDatePickerField = forwardRef<any, ANDatepickerFieldProps>(
    (props, ref) => {
        const {variant = "date", value, onChange, label, margin, ...rest} = props;
        let dateComponent = undefined;
        if (variant === "datetime") {
            dateComponent = (
                <DateTimeField
                    {...rest}
                    label={label}
                    format={"yyyy-MM-dd HH:mm:ss"}
                    value={value}
                    onChange={onChange}
                    margin={margin}
                    fullWidth
                />
            );
        } else if (variant === "date") {
            dateComponent = (
                <DateField
                    {...rest}
                    label={label}
                    format={"yyyy-MM-dd"}
                    value={value}
                    onChange={onChange}
                    margin={margin}
                    fullWidth
                />
            );
        } else if (variant === "time") {
            dateComponent = (
                <TimeField
                    {...rest}
                    label={label}
                    value={value}
                    format={"HH:mm:ss"}
                    onChange={onChange}
                    margin={margin}
                    fullWidth
                />
            );
        }
        return (
            <>
                <div ref={ref}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {dateComponent}
                    </LocalizationProvider>
                </div>
            </>
        );
    });

const ANDatePicker = (props: ANDatepickerProps) => {
    const {name, required, validate, label, error, helperText, ...rest} = props;
    const {control, setValue} = useFormContext();
    return (
        <>
            <Controller
                name={name}
                rules={{required: required && "Required", validate}}
                control={control}
                render={({field, fieldState: {error: errorField}}) => (
                    <ANDatePickerField
                        {...rest}
                        {...field}
                        onChange={(value) => {
                            setValue(name, value);
                        }}
                        slotProps={{
                            textField: {
                                error: !!errorField?.message,
                            }
                        }}
                        margin="normal"
                        label={required ? `${label} *` : label}
                        error={error ?? !!errorField?.message}
                        helperText={helperText ?? errorField?.message}
                    />
                )}
            />
        </>
    )
}

export default ANDatePicker;