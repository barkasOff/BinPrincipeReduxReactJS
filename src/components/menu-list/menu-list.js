import React, {Component} from 'react';
import MenuListItem from '../menu-list-item/menu-list-item';
import WithRestService from '../hoc/with-rest-service';
import Spinner from '../spinner/spinner';
import Error from '../error/error';
import {connect} from 'react-redux';
import {menuLoaded, menuRequested, menuError} from '../../actions';

class   MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();
        const   {RestService, menuLoaded, menuError} = this.props;

        RestService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(error => menuError(error));
    }

    render() {
        const {menuItems, loading, error} = this.props;

        if (error) {
            return <Error />
        }
        if (loading) {
            return <Spinner />
        }
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
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    };
};

const   mapDispatchToProps = {menuLoaded, menuRequested, menuError};

export default WithRestService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));