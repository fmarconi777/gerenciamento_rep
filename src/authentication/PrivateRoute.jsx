import React from 'react';
import { Redirect, Route } from 'react-router';

function PrivateRoute(props) {
    const isLogged = !!localStorage.getItem('token')
    return isLogged ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute;