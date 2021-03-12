import { Router , Switch, Route } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';
import Login from './pages/Login';
import MainControl from './pages/MainControl';
import NotFound from './pages/NotFound';
import { history } from './history';

function Routes() {
    return (
        <Router history={history} >
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/" component={MainControl} />
                <PrivateRoute component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;