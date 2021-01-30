import React from 'react';
import WithRestService from '../hoc/with-rest-service';

const App = ({RestService}) => {
    console.log(RestService.getMenuItems());
    return <h2>Hello, world!</h2>;
}

export default WithRestService()(App);