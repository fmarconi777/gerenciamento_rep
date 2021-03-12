import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaHeadset } from 'react-icons/fa';
import { AiFillSetting, AiOutlineDashboard } from 'react-icons/ai';
import { GiArchiveResearch } from 'react-icons/gi';
import '../styles/components/sidebar.css'

function ButtonsNav (props) {
    return (
        <div className="nav-button">
            <ul className="navbutton-nav">{props.children}</ul>
        </div>
    )
}

function ButtonDrop(props) {
    const [ open, setOpen ] = useState(false)
    return (    
            <li className="button-item">
                <Link to={props.link} className="button-name" onClick={() => setOpen(!open)} >
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
                <Link to={props.link} className="item-name" >
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
                <ButtonsNav>
                    <ButtonDrop leftIcon={<AiOutlineDashboard/>} name="Início" link="/" />
                    <ButtonDrop leftIcon={<FaClock/>} name="Relógios" link="#" >
                        <DropdownMenu>
                            <DropdownItem item_name="Em operação" link="/operational" />
                            <DropdownItem item_name="Reserva" link="/inreserve" />
                            <DropdownItem item_name="Em manutenção" link="/maintenance" />
                        </DropdownMenu>
                    </ButtonDrop>
                    <ButtonDrop leftIcon={<FaHeadset/>} name="Chamados" link="#" >
                        <DropdownMenu>
                            <DropdownItem item_name="Abertos" link="/opencalls" />
                            <DropdownItem item_name="Fechados" link="/closedcalls" />
                        </DropdownMenu>
                    </ButtonDrop>
                    <ButtonDrop leftIcon={<GiArchiveResearch/>} name="Cadastros" link="#" >
                        <DropdownMenu>
                            <DropdownItem item_name="Cadastrar local" link="/registerlocation" />
                            <DropdownItem item_name="Cadastrar terminal" link="/registerterminal" />
                            <DropdownItem item_name="Cadastrar relógio" link="/registerrep" />
                            <DropdownItem item_name="Cadastrar defeito" link="/registerdefect" />
                            <DropdownItem item_name="Cadastrar funcionário" link="/registeremployee" />
                        </DropdownMenu>
                    </ButtonDrop>
                    <ButtonDrop leftIcon={<AiFillSetting/>} name="Configurações" link="/configuration" />
                </ButtonsNav>
            </aside>
        </nav>
    )
}

export default SideBar;