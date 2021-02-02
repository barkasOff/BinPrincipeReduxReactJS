import React from 'react';
import './menu-list-item.scss';

const   MenuListItem = ({menuItem, onAdd}) => {
    const   {name, writer, genre, price, quantity} = menuItem;

    return (
        <>
            <div className="menu__item">
                <div className="note note-fst"><span>Название:</span> {name}</div>
                <div className="note"><span>Автор:</span> {writer}</div>
                <div className="note"><span>Жанр:</span> {genre}</div>
                <div className="note"><span>Цена:</span> {price}руб.</div>
                <div className="note"><span>Осталось:</span> {quantity}шт.</div>
                <button
                    className="menu__btn"
                    onClick={(id) => onAdd(id)}>
                    Добавить в корзину</button>
            </div>
        </>
    );
};

export default MenuListItem;