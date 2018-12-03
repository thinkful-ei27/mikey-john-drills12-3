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

function decode(word) {
    // a = 2
    // b = 3
    // c = 4
    // d = 5

    if (word[0] === 'a') return word[1];
    if (word[0] === 'b') return word[2];
    if (word[0] === 'c') return word[3];
    if (word[0] === 'd') return word[4];
    return ' ';
}

console.log(decode('apple'));

function decoder(string) {
    let strArray = string.split(' ');
    let message = '';
    for (let strings in strArray) {
        message = message.concat(decode(strArray[strings]));
    }
    return message;
}

function decoder2(string) {
    let strArray = string.split(' ');
    let message = '';
    for (let i=0; i<strArray.length; i++) {
        message = message.concat(decode(strArray[i]));
    }
    return message;
}

console.log(decoder2('craft block argon meter bells brown croon droop'));


function daysInMonth(month, leapYear){
    switch(month){
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return `${month} has 31 days.`;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return `${month} has 30 days.`;
            break;
        case 'February':
        if (leapYear === false|| leapYear === undefined) return  `${month} has 28 days.`; 
        if (leapYear === true) return  `${month} has 29 days.`
        
         break;
        default :
        return 'Must provide a valid month';
}
}


console.log(daysInMonth('June'));

function roShamBo(num){
    const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log(`Computer chose ${randomNo}, you chose ${num}`);
      if ( num === randomNo){ 
        return 'Tie game, pick another number'
    }
    if( num === 1 && randomNo === 2){
        return `you lose`
    }
    if( num === 2 && randomNo === 3){
        return `you lose`
    }
    if( num === 3 && randomNo === 1){
        return `you lose`
    }
    if(num>3 || num<1){
        throw new Error(' Pick 1, 2 ,or 3')
    }
    return 'You win!'
    }

try{
    console.log(roShamBo(3));
}
catch(e){console.log(e.message);
}


