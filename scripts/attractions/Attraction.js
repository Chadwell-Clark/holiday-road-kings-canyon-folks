//! This file will be responsible for setting the blueprint of html that we will dynamically populate the DOM with.

//* When an object is passed into this function, it returns a string of html in the form of an option on a dropdown menu.

export const Attraction = (bizarre) => {
    return `
    <option value="${bizarre.id}">${bizarre.name}</option>
    `
}


//! This will be used later to build out the bizarre attraction card.

// <h2>${bizarre.name}</h2>
//     <p>Location: ${bizarre.city} + " " + ${bizarre.state}</p>
//     <p>${bizarre.description}</p>
//     <p>Souvenirs? ${bizarre.souvenirs}</p>
//     <p>Restrooms? ${bizarre.restrooms}</p>