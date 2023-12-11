import React, { useState } from "react";
import { useState } from "react";

export default function Login() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        let formData = new FormData()
        formData.append('login', login)
        formData.append('password',password)
    }

    return (
        <div>
            <form>
                <h1>Connexion</h1>
                <input onChange={(event)=>{setLogin(event.target.value)}} type="text" name="login" id="login"/>
                <input onChange={(event)=>{setPassword(event.target.value)}} type="password" name="password" id="password"/>
                <button onClick={handleLogin} type="button" id="login">SE CONNECTER</button>
            </form>
        </div>
    )
}