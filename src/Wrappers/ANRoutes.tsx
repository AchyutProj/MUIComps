import {Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Dashboard from "@anPages/Dashboard/Dashboard.tsx";
import Login from "@anPages/Auth/Login/Login.tsx";

import AuthWrapper from "@anWrappers/AuthWrapper.tsx";
import GuestWrapper from "@anWrappers/GuestWrapper.tsx";
import {useEffect} from "react";
import {LOGIN_TOKEN} from "@an/env";

const ANRoutes = () => {

    const token = localStorage.getItem(LOGIN_TOKEN);
    const nav = useNavigate();
    const loc = useLocation();

   useEffect(() => {
       if(!token) {
           nav('/login');
       }

       if(loc.pathname === '/') {
           nav('/dashboard');
       }

   }, [nav, token]);

    return (
        <Routes>
            <Route path="/" element={<></>} />
            <Route element={
                <AuthWrapper>
                    <Outlet />
                </AuthWrapper>
            }>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>



            <Route element={
                <GuestWrapper>
                    <Outlet />
                </GuestWrapper>
            }>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
}

export default ANRoutes;