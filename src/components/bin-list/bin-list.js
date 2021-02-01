import React from 'react';

const   BinList = (items, onDelete) => {
    return (
        <>
            <div>Корзина:</div>
            {
                items.map(item => {
                    const   {name, writer, genre, price, quantity, id} = item;

                    return (
                        <div>
                            <div
                                onClick={() => onDelete(id)}>
                                &times;</div>
                            <div key={id}>
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
        </>
    );
};

export default BinList;