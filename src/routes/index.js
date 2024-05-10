import AppRoutes from "./App.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../context/useAuth";
import React from "react";

const Routes = () =>{
    const {user} = useAuth();
    return user ? <AppRoutes/> : <AuthRoutes/>
};

export default Routes;