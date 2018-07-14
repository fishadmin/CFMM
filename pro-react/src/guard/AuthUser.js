import React from 'react';
import {Route,Redirect} from 'react-router-dom';
export const AuthUser=({component:Component,...rest})=>(
  <Route {...rest} render={(props)=>(
    Math.random()< .5 ?
      <Component {...props}/> :
      <Redirect to="/login" />
  )} />
);