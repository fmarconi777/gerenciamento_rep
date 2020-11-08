import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaHeadset } from 'react-icons/fa';
import { AiFillSetting, AiOutlineDashboard } from 'react-icons/ai';
import '../styles/components/sidebar.css'

function ButtonDrop (props) {
    return (
        <div className="nav-button">
            <ul className="navbutton-nav">{props.children}</ul>
        </div>
    )
}

function ButtonName(props) {
    const [ open, setOpen ] = useState(false)
    return (
        <li className="button-item">
            <Link to="#" className="button-name" onClick={() => setOpen(!open)} >
                <span className="icon-button"> {props.leftIcon} </span>
                {props.name}
            </Link>
            {open && props.children}
        </li>
    )
}

function DropdownMenu(props) {
    return (
        <div className="dropdown">
             <ul className="navbutton-nav">{props.children}</ul>
        </div>  
    );
}

function DropdownItem (props) {
    return (
        <li className="menu-item">
            <Link to="#" className="item-name" >
                {props.item_name}
            </Link>
        </li>
    )
}

function SideBar(props) {
    return (
        <nav className="sidebar-container">
            <div className="sidebar-title">
                <h1>Gerênciamento de REP's</h1>
            </div>
            <aside className="main-sidebar" >
                <ButtonDrop>
                    <ButtonName leftIcon={<AiOutlineDashboard/>} name="Início" />
                    <ButtonName leftIcon={<FaClock/>} name="Relógios">
                        <DropdownMenu>
                            <DropdownItem item_name="Em operação" />
                            <DropdownItem item_name="Reserva" />
                            <DropdownItem item_name="Em manutenção" />
                        </DropdownMenu>
                    </ButtonName>
                    <ButtonName leftIcon={<FaHeadset/>} name="Chamados">
                        <DropdownMenu>
                            <DropdownItem item_name="Abertos" />
                            <DropdownItem item_name="Fechados" />
                        </DropdownMenu>
                    </ButtonName>
                    <ButtonName leftIcon={<AiFillSetting/>} name="Configurações" />
                </ButtonDrop>
            </aside>
        </nav>
    )
}

export default SideBar;