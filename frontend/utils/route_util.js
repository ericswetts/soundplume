import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );
  
  // renders component if logged in, otherwise redirects to the login page
  const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
       loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}/>
  );
  
  // access the Redux state to check if the user is logged in
  const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
  }
  
  // connect Auth to the redux state
  export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
  
  // connect Protected to the redux state
  export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));