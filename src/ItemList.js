import React from 'react';
import Item from './Item';

function ItemList() {
    return (
        <div className="ItemList">
            <Item 
                caption="HI"
                subcaption="itme!"
                image="rockfact.jpeg"
            />
            <Item 
                caption="HELLO"
                subcaption="itmetoo!"
                image="rockfact.jpeg"
            />
            <Item 
                caption="HEY"
                subcaption="itmealso!"
                image="rockfact.jpeg"
            />
             <Item 
                caption="HI THERE"
                subcaption="itmeaswell!"
                image="rockfact.jpeg"
            />
        </div>
    )
}

export default ItemList