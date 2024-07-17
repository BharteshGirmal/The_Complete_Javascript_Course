// Function Expression 

const calculateAge = function(birthYear){
      return 2023 - birthYear;
}
00
// Arrow Functions

const calculateAge2= birthYear=>2023 - birthYear; 

const age=calculateAge2(1998);

console.log("My current age is : "+age);

const yearOfRetirement= (birthYear, firstName)=>{
      const currAge = 2023 - birthYear;
      const retirement = 65 - currAge;
      return `The Person ${firstName} retires in ${retirement} years`;
}

console.log(yearOfRetirement(1998, 'Bhartesh'));

console.log(yearOfRetirement(1996, 'Amar'));

// Functions callling other functions


function cutFruitpieces(fruit)
{
      return fruit*4;
}

const fruitProcessor= function(apples, oranges)
{
      const applePiece= cutFruitpieces(apples);
      const orangePiece= cutFruitpieces(oranges);

      const juice = `Juice with ${applePiece} piece of Apple and ${orangePiece} piece of Orange`;

      return juice;
}

console.log(fruitProcessor(4,2));

// function Expression
const calAge= function (birthYear)
{
      return 2023 - birthYear;
}

// Arrow Function
const yearsLeft= (birthYear, firstName)=>{
      const currAge = calAge(birthYear);
      const ret= 65 - currAge;
      return ret >0 ? `The person ${firstName} has to live for another ${ret} years.`: `The person ${firstName} is Already retired` ;
}

console.log(yearsLeft(1998,'Bhartesh'));
console.log(yearsLeft(1955,'Amar'));