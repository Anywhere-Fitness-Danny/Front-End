import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

// Component imports
import PrivateRoute from './PrivateRoute';
import LoginContainer from './login/LoginContainer';
import Profile from './Profile';
import UserHome from './UserHome';
import Classes from './Classes';
import Class from './Class';

const MasterRouter = () => {
  return (
    <>
      <PrivateRoute exact path='/user/:id' component={UserHome} />
      <PrivateRoute exact path='/user/:id/classes' component={Classes} />
      <PrivateRoute exact path='/user/:id/classes/:id' component={Class} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path='/login' render={props => <LoginContainer {...props} isLoginActive={true}/>} />
      <Route path='/register' render={props => <LoginContainer {...props} isLoginActive={false}/>} />
    </>
  );
}

export default MasterRouter;