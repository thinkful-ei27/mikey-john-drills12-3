'use strict';

function jediName(firstName, lastName) {
    // Return Jedi name
    // first 3 letters of last name, first 2 letters of first name
    let jediLast = lastName.substring(0,3);
    let jediFirst = firstName.substring(0, 2);
    return `${jediLast}${jediFirst}`;
}

console.log(jediName('John', 'Young'));