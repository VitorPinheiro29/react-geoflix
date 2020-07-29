import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import RegisterVideo from './pages/RegisterVideo';
import RegisterCategory from './pages/RegisterCategory';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={RegisterVideo} path="/register/video" /> 
            <Route component={RegisterCategory} path="/register/category" />
        </BrowserRouter>
    )
}

export default Routes;