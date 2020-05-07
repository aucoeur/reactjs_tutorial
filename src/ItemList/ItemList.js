import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import data from '../data.json';

function ItemList() {
    const spaces = data.map(( { caption, subcaption, image, hours }, i ) => {
        
        return (
            <Item 
                id={i}
                caption={caption}
                subcaption={subcaption}
                image={image}
                hours={hours}
            />
        )
    })
    return (
        <div className="ItemList">
            { spaces }
        </div>
    )
}


export default ItemList