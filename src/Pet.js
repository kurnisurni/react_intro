import React from "react";

// const Pet = props => {

// return (
//     <div>
//         <h1>Name: {props.name.toUpperCase()}</h1>
//         <h2>{props.animal}</h2>
//         <h2>{props.breed}</h2>
//     </div>
//     );
// };

export default function Pet ({name, animal, breed, media, location, id}) {
    let hero = 'http://placecorgi.com/300/300';
    if(media.length) {
        hero = media[0].small;
    }

    return (
        <a href={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src= {hero} alt={name}/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </a>
    )
}