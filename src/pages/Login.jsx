import React, { useState } from 'react';
import Axios from 'axios';
import { FaUserCircle, FaSignInAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { history } from '../history';
import '../styles/pages/login.css';
import logo from '../images/logo-cbtu.png';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notAuth, setNotAuth] = useState(null);
    const [error, setError] = useState("");

    const authenticate = async () => {
        const resposta = await Axios.post("http://localhost:8080/login", {
            Login: username,
            Senha: password
        });
        return resposta.data.resposta;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const resposta = await authenticate();
        if (resposta.Token && resposta.Auth === true) {
            localStorage.setItem('token', resposta.Token);
            setNotAuth(false)
            setUsername("");
            setPassword("");
            history.push('/');            
        } else {
            setNotAuth(true);
            setError(resposta);
        };
    };

    return (
        <div id="login-page">
            <form onSubmit={submitForm} >
                <div className="container">
                    <div className="logo-container">
                        <h1>Gerenciamento de REP's</h1>
                        <img src={logo} alt="logo-CBTU" />
                        <p>CBTU/STU-BH</p>
                    </div>
                    {
                        notAuth &&
                        <div className={notAuth === true ? "error" : ""} >
                            <p>{error}</p>
                        </div>
                    }
                    <div className="input-box">
                        <label>Usuário</label>
                        <FaUserCircle className="icon-user" size={37} color="rgba(0, 0, 0, 0.6)" />
                        <input type="text" onChange={(e) => { setUsername(e.target.value) }} name="username" />
                    </div>
                    <div className="input-box">
                        <label>Senha</label>
                        <MdLock className="icon-password" size={36} color="rgba(255, 255, 255, 1)" />
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} name="password" />
                    </div>
                    <button type="submit" >
                        Login <FaSignInAlt className="sign" />
                    </button>
                </div>
            </form>
        </div >
    );
}

export default Login;