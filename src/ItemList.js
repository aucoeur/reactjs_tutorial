import React from 'react';
import Item from './Item';
import './ItemList.css';
import data from './data.json';

function ItemList() {
    const spaces = data.map(( { id, caption, subcaption, image, hours } ) => {
        
        return (
            <Item 
                key={id}
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