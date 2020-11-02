import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaExpeditedssl, FaSignInAlt } from "react-icons/fa";
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
                    <FaUserCircle className="icon" size={37} color="rgba(0, 0, 0, 0.6)" />
                    <input type="text"/>
                </div>
                <div className="input-box">
                    <p>Senha</p>                 
                    <FaExpeditedssl className="icon" size={37} color="rgba(0, 0, 0, 0.6)" />
                    <input type="text"/>
                </div>
                <Link to="/app" className="login-button">
                    Login <FaSignInAlt className="sign" />
                </Link>
            </div>
        </div>
    );
}

export default Login;