import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Operational from '../pages/views/Operational';
import InReserve from '../pages/views/InReserve';
import Maintenance from '../pages/views/Maintenance';
import OpenCalls from '../pages/views/OpenCalls';
import ClosedCalls from '../pages/views/ClosedCalls';
import Configuration from '../pages/views/Configuration';
import '../styles/components/content.css';

function Content() {
    return (
        <main className="content-page" >
            <Switch>
                <Route path="/app/operational" component={Operational} />
                <Route path="/app/inreserve" component={InReserve} />
                <Route path="/app/maintenance" component={Maintenance} />
                <Route path="/app/opencalls" component={OpenCalls} />
                <Route path="/app/closedcalls" component={ClosedCalls} />
                <Route path="/app/configuration" component={Configuration} />
            </Switch>
        </main>
    )
}

export default Content;