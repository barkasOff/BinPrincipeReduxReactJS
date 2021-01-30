import React, {Component} from 'react';
import MenuListItem from '../menu-list-item/menu-list-item';
import WithRestService from '../hoc/with-rest-service';
import {connect} from 'react-redux';

class   MenuList extends Component {
    componentDidMount() {
        const   {RestService} = this.props;

        RestService.getMenuItems()
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

    render() {
        const {menuItems} = this.props;

        return (
            <ul>
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem} />;
                    })
                }
            </ul>
        );
    }
};

const   mapStateToProps = (state) => {
    return {
        menuItems: state.menu
    };
};

export default WithRestService()(connect(mapStateToProps)(MenuList));