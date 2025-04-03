import React from "react";
import { Login } from "../components/Login";
import { Context } from "../components/Context";

export function SignIn(){
    return <div>
        <Context mensaje="Las rutas como /mainpage y /contact están bloqueadas hasta que inicies sesión."/>
        <Login />
    </div>;
}