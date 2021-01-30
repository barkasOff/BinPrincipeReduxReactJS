import React from 'react';

const   MenuListItem = ({menuItem}) => {
    const   {name, author, genre, writer, quantity} = menuItem;

    return (
        <>
            <li>
                <div>Название: {name}</div>
                <div>Автор: {writer}</div>
                <div>Жанр: {genre}</div>
                <div>Цена: {author}руб.</div>
                <div>Осталось: {quantity}шт.</div>
            </li>
        </>
    );
};

export default MenuListItem;