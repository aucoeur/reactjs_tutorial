import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item(props) {
    const { image, caption, subcaption, hours, id } = props
    return (
        <div>
            {/* <img src={`${process.env.PUBLIC_URL}image/${image}`} width="300" height="300" alt="Hello" /> */}
            <Link to={`/details/${id}`}>
                <h1>{caption}</h1>
            </Link>
            <Link to={`/details/${id}`}>
                <img src={image} width="300" height="300" alt="placeholder" />
            </Link>
            <div>{subcaption}</div>
            <div>{hours}</div>
            <hr />
        </div>
    )
}

export default Item