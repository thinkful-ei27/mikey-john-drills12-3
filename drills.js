function yearOfBirth(age){
if (age < 1){ throw new Error('Age cannot be negative')};
return new Date().getFullYear() - age;

}

function createGreeting(name, age){
  
    return `Hi my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth(age)}`;
}
try{
    console.log(createGreeting('john', -50));
 }
catch(e){ 
    console.log(e.message);
}
