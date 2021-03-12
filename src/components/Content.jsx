import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Operational from '../pages/views/Operational';
import InReserve from '../pages/views/InReserve';
import Maintenance from '../pages/views/Maintenance';
import OpenCalls from '../pages/views/OpenCalls';
import ClosedCalls from '../pages/views/ClosedCalls';
import Configuration from '../pages/views/Configuration';
import RegisteroLcation from '../pages/views/RegisterLocation';
import RegisterTerminal from '../pages/views/RegisterTerminal';
import RegisterREP from '../pages/views/RegisterREP';
import RegisterDefect from '../pages/views/RegisterDefect';
import RegisterEmployee from '../pages/views/RegisterEmployee';
import NotFound from '../pages/NotFound';
import '../styles/components/content.css';

function Content() {
    return (
        <main className="content-page" >
            <Switch>
                <Route path="/operational" component={Operational} />
                <Route path="/inreserve" component={InReserve} />
                <Route path="/maintenance" component={Maintenance} />
                <Route path="/opencalls" component={OpenCalls} />
                <Route path="/closedcalls" component={ClosedCalls} />
                <Route path="/configuration" component={Configuration} />
                <Route path="/registerlocation" component={RegisteroLcation} />
                <Route path="/registerterminal" component={RegisterTerminal} />
                <Route path="/registerrep" component={RegisterREP} />
                <Route path="/registerdefect" component={RegisterDefect} />
                <Route path="/registeremployee" component={RegisterEmployee} />
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}

export default Content;