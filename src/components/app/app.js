import React from 'react';
import AppHeader from '../app-header/app-header';
import { Route, Switch } from 'react-router-dom';
import { ShopPage, BinPage } from '../pages';
import './app.scss';


const App = () => {
    return (
        <div className="container">
            <AppHeader />
            <Switch>
                <Route path='/' exact component={ShopPage}/>
                <Route path='/bin' component={BinPage}/>
            </Switch>
        </div>
    );
};

export default App;