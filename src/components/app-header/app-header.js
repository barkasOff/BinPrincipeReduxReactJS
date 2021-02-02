import React from 'react';
import { Link } from 'react-router-dom';
import "./app-header.scss";

const   AppHeader = () => (
    <header className="header">
        <Link
            className="header__item"
            to={'/'}>
            Menu</Link>
        <Link
            className="header__item"
            to={'/bin'}>
            Bin</Link>
    </header>
);

export default AppHeader;