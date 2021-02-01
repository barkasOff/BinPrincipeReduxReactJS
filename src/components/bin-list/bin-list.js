import React from 'react';
import {connect} from 'react-redux';
import {deleteFromBin} from '../../actions';

const   BinList = ({items, deleteFromBin}) => {
    return (
        <>
            <div>Корзина:</div>
            <div>
                {
                    items.map(item => {
                        const   {name, writer, genre, price, quantity, id} = item;

                        return (
                            <div key={id}>
                                <div
                                    onClick={() => deleteFromBin(id)}>
                                    &times;</div>
                                <div>
                                    <div>Название: {name}</div>
                                    <div>Автор: {writer}</div>
                                    <div>Жанр: {genre}</div>
                                    <div>Цена: {price}руб.</div>
                                    <div>Осталось: {quantity}шт.</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

const   mapStateToProps = (items) => items;
const   mapDispatchToProps = {deleteFromBin};

export default connect(mapStateToProps, mapDispatchToProps)(BinList);