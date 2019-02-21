import React from 'react'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
    <div>
        <AuthRoute path='/' component={SignupContainer}/>
        <AuthRoute path='/login' component={LoginContainer} />
    </div>
);

