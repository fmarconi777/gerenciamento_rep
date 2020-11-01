import React from 'react';
import '../styles/login.css'
import logo from '../images/logo-cbtu.png';

function Login() {
    return (
        <div id="login-page">
            <div className="container">
                <div className="logo-container">
                    <h1>Gerenciamento de REP's</h1>
                    <img src={logo} alt="logo-CBTU"/>
                    <p>CBTU/STU-BH</p>
                </div>
                <div className="input-box">
                    <p>Usuário</p>
                    <input type="text"/>
                </div>
                <div className="input-box">
                    <p>Senha</p>
                    <input type="text"/>
                </div>
                <button>Login</button>
            </div>
        </div>
    );
}

export default Login;