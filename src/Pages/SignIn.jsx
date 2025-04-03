import { Login } from "../Components/Login";
import { Context } from "../Components/Context";

export function SignIn(){
    return <div>
        <Context mensaje="Las rutas como /mainpage y /contact están bloqueadas hasta que inicies sesión."/>
        <Login />
    </div>;
}