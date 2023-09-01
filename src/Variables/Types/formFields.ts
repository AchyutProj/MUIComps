import type {FieldValues, UseFormProps, ValidateResult} from "react-hook-form";
import {DetailedHTMLProps, FormHTMLAttributes, ReactNode} from "react";
import {TextFieldProps} from "@mui/material";

export interface ANReactHookFormProps
    extends Omit<
        DetailedHTMLProps<
            FormHTMLAttributes<HTMLFormElement>,
            HTMLFormElement
        >,
        "onSubmit"
    >,
        ANReactHookInputBaseProps {
    onSubmit: (value: any) => Promise<void> | void;
}

export interface ANReactHookFormProviderProps
    extends UseFormProps<FieldValues, Record<string, unknown>>,
        ANReactHookInputBaseProps {
    children?: ReactNode;
}

export interface ANOptionProps {
    label: string;
    value: string | number;
    disabled? : boolean;
}

export interface ANSelectOptionProps {
    options: ANOptionProps[];
}

export type ANSelectFieldProps = ANTextFieldProps & ANSelectOptionProps & {
    setValue?: any;
}

export interface ANSelectProps
    extends Omit<ANSelectFieldProps, "onChange">,
        ANReactHookInputBaseProps {
    name: string;
}

export interface ANTextFieldProps
    extends Omit<TextFieldProps, "onChange">,
        ANReactHookInputBaseProps {
    name: string;
    error?: boolean;
    helperText?: string;
}

export interface ANReactHookInputBaseProps {
    required?: boolean;
    validate?: (
        value: string | number | boolean | Record<string, any>
    ) => ValidateResult | Promise<ValidateResult>;
}

export interface ANDatepickerFieldProps {
    variant?: "time" | "date" | "datetime";
    value: string;
    onChange: (value: unknown) => void;
    label: string;
    slotProps?: Record<string, unknown>;
    margin?: "none" | "dense" | "normal";
    error?: boolean;
    helperText?: string;
}

export interface ANDatepickerProps
    extends Omit<ANDatepickerFieldProps, 'value' | 'onChange'>,
        ANReactHookInputBaseProps {
    name: string;
    label: string;
    error?: boolean;
    helperText?: string;
}