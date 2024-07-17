
const oneWord = function(str){
      return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // remove all non alphanumeric characters and convert      
}

const upperFirstWord = function(str){
      // return str.charAt().toUpperCase() + str.slice(1);  // slice is used to get the rest of string after first character

      const [first, ...others]=str.split(' ');
      return [first.toUpperCase(), ...others].join(' ');
}

// Higher order Function

const transform= function(str, fn){
      console.log(`Original String : ${str}`);
      console.log(`Transfromed String : ${fn(str)}`);
      console.log(`Transfromed by : ${fn.name}`);

}

transform('JavaScript is the best !', upperFirstWord);
transform('JavaScript is the best !', oneWord);


const high5 = function(){
      console.log("High 5");
}

document.body.addEventListener('click', high5); 

// Functions returning the functions 

const greet =function(greeting){
      return function(name){
            console.log(`${greeting},${name}!`) ;
      }
}

const greeterHey = greet('Hey');
greeterHey('<NAME>');
greeterHey('bhartesh');

greet('Good')('Morning');


const greetArr = greeting => name=>console.log(`${greeting} ${name}`);

greetArr('Hello')('Bhartesh');
