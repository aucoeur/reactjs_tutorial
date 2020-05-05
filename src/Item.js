import React, { Children } from 'react';
import './Item.css';

function Item(props) {
    const { image, caption, subcaption, hours } = props
    return (
        <div>
            {/* <img src={`${process.env.PUBLIC_URL}image/${image}`} width="300" height="300" alt="Hello" /> */}
            <h1>{caption}</h1>
            <img src={image} width="300" height="300" alt="placeholder image" />
            <div>{subcaption}</div>
            <div>{hours}</div>
            <hr />
        </div>
    )
}

export default Item