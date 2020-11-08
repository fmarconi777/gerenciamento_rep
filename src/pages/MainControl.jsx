import React from 'react';
import SideBar from '../components/SideBar';
import PageHeader from "../components/PageHeader";
import '../styles/pages/maincontrol.css'

function MainControl() {
    return (
        <div id="main-page">
            <SideBar />
            <PageHeader />
        </div>
    );
}

export default MainControl;