'use strict';

console.log('Strict mode and Functions');

function myFunctiom()
{
      console.log('Inside myFunctionm');
}

myFunctiom();

function fruitProcessor(apples, oranges)
{
      const juice = `juice with ${apples} apples and ${oranges} oranges`;

      return juice;
}

const shake = fruitProcessor(5, 1);
console.log(shake);
console.log(fruitProcessor(4,3));


function calculateAge(birthYear)
{
      return 2023 - birthYear;
}

console.log("My current age is "+ calculateAge(1998));

console.log('Anooyomous Function');
// a function without a name is called as a anoymous function
const calculateAge2= function (birthYear)
{
      return 2023 - birthYear;
}

const year= calculateAge2(1996);

console.log(year);

// Functions are just values 