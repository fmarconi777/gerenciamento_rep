import React from 'react';
import SideBar from '../components/SideBar';
import PageHeader from '../components/PageHeader';
import ContentMain from '../components/ContentMain';
import '../styles/pages/maincontrol.css'

function MainControl() {
    return (
        <div id="main-page">
            <SideBar />
            <PageHeader />
            <ContentMain></ContentMain>
        </div>
    );
}

export default MainControl;