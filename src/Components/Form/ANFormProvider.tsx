import type {
    ANReactHookFormProps,
    ANReactHookFormProviderProps
} from "@anTypes/formFields.ts";
import {FormProvider, useForm, useFormContext} from "react-hook-form";

export const ANFormProvider = (props: ANReactHookFormProviderProps) => {
    const { children, ...rest } = props;
    const methods = useForm(rest);
    return <FormProvider {...methods}>{children}</FormProvider>;
};

export const ANHookForm = (props: ANReactHookFormProps) => {
    const { children, onSubmit, ...rest } = props;
    const { handleSubmit } = useFormContext();
    return (
        <form onSubmit={handleSubmit(onSubmit)} {...rest}>
            {children}
        </form>
    );
};