import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../components/SideBar';
import PageHeader from '../components/PageHeader';
import Content from '../components/Content';
import '../styles/pages/maincontrol.css';

function MainControl() {
    return (
        <div id="main-page">
            <BrowserRouter>
                <SideBar />
                <Content></Content>
            </BrowserRouter>
            <PageHeader />
        </div>
    );
}

export default MainControl;