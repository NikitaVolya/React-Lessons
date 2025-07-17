
import "./Login.css";

import { useState } from "react";


const LoginState = {
    None: "none",
    Successful: "success ",
    WrongPassword: "wrongPassword",
    WrongLogin: "wrongLogin",
}

function Login() {
    
    const [loginState, setLoginState] = useState(LoginState.None);
    const [statusMessage, setStatusMessage] = useState('');

    const [userData, setUserData] = useState({
        login: "nikita",
        passwod: "123456"
    });

    const [passwod, setPassowrd] = useState('');
    const [login, setLogin] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (login !== userData.login)
        {
            setLoginState(LoginState.WrongLogin);
            setStatusMessage("Wrong login");

        }
        else if (passwod !== userData.passwod)
        {
            setLoginState(LoginState.WrongPassword)
            setStatusMessage("Wrong password");
        }
        else 
        {
            setLoginState(LoginState.Successful);
            setStatusMessage("Successful");
        }
    }


    return <>
        <form class="login-form" onSubmit={onSubmit}>
            <h2>Login</h2>
            <input type="text" placeholder="Login" required onChange={(e) => setLogin(e.target.value)} minLength={2}/>
            <input type="password" placeholder="Password" required onChange={(e) => setPassowrd(e.target.value)} minLength={6}/>
            <button type="submit">Sign In</button>
            
            <div className={`status ${loginState}`}> { statusMessage } </div>
        </form>
    </>


}

export default Login;
