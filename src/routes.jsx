import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainControl from './pages/MainControl';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/app" component={MainControl} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;