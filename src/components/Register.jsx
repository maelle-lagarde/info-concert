import React from "react";

export default function Register() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleRegister() {
        let formData = new FormData()
        formData.append('login', login)
        formData.append('password',password)
        formData.append('confirmPassword',confirmPassword)
    } 

    return (
        <div>
            <form>
                <h1>Inscription</h1>
                <input onChange={(event)=>{setLogin(event.target.value)}} type="text" name="login" id="login"/>
                <input onChange={(event)=>{setPassword(event.target.value)}} type="password" name="password" id="password"/>
                <input onChange={(event)=>{setConfirmPassword(event.target.value)}} type="password" name="confirmPassword" id="confirmpassword"/>
                <button onClick={handleRegister} type="button" id="register">S'INSCRIRE</button>
            </form>
        </div>
    )
}