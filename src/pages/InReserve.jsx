import React from 'react';
import SideBar from '../components/SideBar';
import PageHeader from '../components/PageHeader';
import ContentReserve from '../components/ContentReserve';

import '../styles/pages/operational.css';

function Operational(props) {
    return (
        <div id="main-page">
            <SideBar />
            <PageHeader />
            <ContentReserve />
        </div>
    )
}

export default Operational;