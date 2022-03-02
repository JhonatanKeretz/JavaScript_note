import React from 'react';
import { Route, Routes } from 'react-router-dom';

const privateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Routes to={{ pathname: '/login' }} />
  )} />
)

export default privateRoute;