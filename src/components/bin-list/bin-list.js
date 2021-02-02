import React from 'react';
import {connect} from 'react-redux';
import {deleteFromBin} from '../../actions';
import "./bin-list.scss";

const   BinList = ({items, deleteFromBin}) => {
    return (
        <>
            <div className="binlist">
                {
                    items.map(item => {
                        const   {name, writer, genre, price, quantity, id} = item;

                        return (
                            <div key={id} className="binlist__item">
                                <div
                                    className="binlist__close"
                                    onClick={() => deleteFromBin(id)}>
                                    &times;</div>
                                <div>
                                    <div className="note note-fst"><span>Название:</span> {name}</div>
                                    <div className="note"><span>Автор:</span> {writer}</div>
                                    <div className="note"><span>Жанр:</span> {genre}</div>
                                    <div className="note"><span>Цена:</span> {price}руб.</div>
                                    <div className="note"><span>Осталось:</span> {quantity}шт.</div>
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