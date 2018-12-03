function yearOfBirth(age){
   return new Date().getFullYear() - age;
}

function createGreeting(name, age){
  
   return `Hi my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth(age)}`;
}

console.log(createGreeting('john', 30));

