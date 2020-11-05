import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App';
import Works from '../pages/Works'



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
             <Route component={App}  path="/" exact />
             <Route component= {Works} path="/works"/>
            </Switch>       
        </BrowserRouter>
    );
}

export default Routes;