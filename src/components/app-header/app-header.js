import React from 'react';
import { Link } from 'react-router-dom';

const   AppHeader = () => (
    <header>
        <Link to={'/'}>Menu</Link>
        <Link to={'/bin'}>Bin</Link>
    </header>
);

export default AppHeader;