import {Box, Container, Typography} from "@mui/material";
import {Lock} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {ANFormProvider, ANHookForm} from "@anComps/Form/ANFormProvider.tsx";
import ANTextField from "@anComps/Form/ANTextField.tsx";
import ANPasswordField from "@anComps/Form/ANPasswordField.tsx";
import ANButton from "@anComps/Form/ANButton.tsx";
import {useDispatch} from "react-redux";
import {anFetch} from "@anFetchers/apiFetcher.ts";
import {LoginPayload} from "@anTypes/payload.ts";
import {login} from "@anEndpoints/auth.ts";
import {LOGIN_TOKEN} from "@an/env";

const Login = () => {

    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleLoginRequest = (data: LoginPayload) => {
        anFetch(login, data)
            .then((res) => {
                localStorage.setItem(LOGIN_TOKEN, res.data);
                dispatch({type: "LOGIN"});
                dispatch({type: "SET_TOKEN", payload: res.data});
                nav('/dashboard');
            });
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                bgcolor: 'primary.main',
                color: 'text.primary',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Container
                    maxWidth="sm"
                    sx={{
                        bgcolor: 'background.paper',
                        borderRadius: '16px',
                        p: 5,
                        boxShadow: 20,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center',
                            textTransform: 'uppercase'
                        }}
                        noWrap
                    >
                        Login
                    </Typography>
                    <ANFormProvider defaultValues={{
                        email: "",
                        password: "",
                    }}
                    >
                        <ANHookForm onSubmit={handleLoginRequest}>
                            <ANTextField
                                name="email"
                                label="Email"
                                required
                            />
                            <ANPasswordField
                                name="password"
                                label="Password"
                                required
                            />
                            <ANButton type="submit" startIcon={<Lock/>} fullWidth>
                                Login
                            </ANButton>
                        </ANHookForm>
                    </ANFormProvider>

                    <Link
                        to="/forgot-password"
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <Typography
                            color={'primary'}
                            sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                                marginTop: '1rem',
                            }}
                            noWrap
                        >
                            Forgot Password?
                        </Typography>
                    </Link>
                </Container>
            </Box>
        </>
    )
}

export default Login;