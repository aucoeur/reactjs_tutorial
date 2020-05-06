import React from 'react';
import data from './data.json';

function ItemDetails(props) {
    const { id } = props.match.params 
    const { caption, subcaption, image, hours, sciencey, code_num, description } = data[id]

    return (
        <div>
            <div>
                <img src={image} alt="dummy" />
            </div>

            <div>
                <h1>{ caption }</h1>
                <p> { subcaption }</p>
                <p> { hours }</p>
                <p> { description }</p>
                <p> { code_num }</p>
                <p> { sciencey }</p>                
            </div>
        </div>
    )
}

export default ItemDetails;