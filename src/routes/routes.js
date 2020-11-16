import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App';
import Works from '../pages/Works'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
             <Route component={App}  path="/" exact />
             <Route component= {Works} path="/works"/>
             <Route component= {Blog} path="/blog"/>
             <Route component= {Contact} path="/contact"/>
             
            </Switch>       
        </BrowserRouter>
    );
}

export default Routes;