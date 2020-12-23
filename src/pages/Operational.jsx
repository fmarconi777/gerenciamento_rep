import React from 'react';
import SideBar from '../components/SideBar';
import PageHeader from '../components/PageHeader';
import ContentOperation from '../components/ContentOperation';

import '../styles/pages/operational.css';

function Operational(props) {
    return (
        <div id="main-page">
            <SideBar />
            <PageHeader />
            <ContentOperation />
        </div>
    )
}

export default Operational;