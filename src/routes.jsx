import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import MainControl from './pages/MainControl';
import Operational from './pages/Operational'
import InReserve from './pages/InReserve'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/app" exact component={MainControl} />
                <Route path="/operational" exact component={Operational} />
                <Route path="/inreserve" exact component={InReserve} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;