import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './screens/home';


const Routes = () => (
    <BrowserRouter>
    <Router>
        <Route exact path='/' element={Home} />
    </Router>
    </BrowserRouter>
)

export default Routes;
