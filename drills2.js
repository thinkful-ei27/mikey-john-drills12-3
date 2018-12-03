'use strict';

function jediName(firstName, lastName) {
    // Return Jedi name
    // first 3 letters of last name, first 2 letters of first name
    let jediLast = lastName.substring(0,3);
    let jediFirst = firstName.substring(0, 2);
    return `${jediLast}${jediFirst}`;
}

console.log(jediName('John', 'Young'));

function beyond(num) {
    // Logs different msg depending upon value
    // if infinite shout 'And beyond'
    // if finite and positive log 'To infinity'
    // if finite and negative log 'To negative infinity'
    // if zero log 'Staying home'
    if (num === Infinity) return 'And beyond';
    if (num > 0) return 'To infinity';
    if (num < 0) return 'To negative infinity';
    if (num === 0) return 'Staying home';
}

console.log(beyond(0));