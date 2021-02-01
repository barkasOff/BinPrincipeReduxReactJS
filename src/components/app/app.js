import React from 'react';
import AppHeader from '../app-header/app-header';
import { Route, Switch } from 'react-router-dom';
import { ShopPage, BinPage } from '../pages';


const App = () => {
    return (
        <div>
            <AppHeader />
            <Switch>
                <Route path='/' exact component={ShopPage}/>
                <Route path='/bin' component={BinPage}/>
            </Switch>
        </div>
    );
};

export default App;