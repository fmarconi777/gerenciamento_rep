import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import MainControl from './pages/MainControl';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/app" exact component={MainControl} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;