import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Operational from '../pages/views/Operational';
import InReserve from '../pages/views/InReserve';
import Maintenance from '../pages/views/Maintenance';
import '../styles/components/content.css';

function Content() {
    return (
        <main className="content-page" >
            <Switch>
                <Route path="/app/operational" component={Operational} />
                <Route path="/app/inreserve" component={InReserve} />
                <Route path="/app/maintenance" component={Maintenance} />
            </Switch>
        </main>
    )
}

export default Content;