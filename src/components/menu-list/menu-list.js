import React, {Component} from 'react';
import MenuListItem from '../menu-list-item/menu-list-item';

export default class MenuList extends Component {
    render() {
        return (
            <ul>
                <MenuListItem />
            </ul>
        );
    }
};