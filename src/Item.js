import React from 'react';
import './Item.css';

function Item(props) {
    const { image, caption, subcaption } = props
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}image/${image}`} width="300" height="300" alt="Hello" />
            <h1>{caption}</h1>
            <div>{subcaption}</div>
            <hr />
        </div>
    )
}

export default Item