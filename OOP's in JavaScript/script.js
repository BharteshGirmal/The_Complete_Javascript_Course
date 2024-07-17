'use strict';

console.log('__________________ constructor function __________________');
const Person =function(firstName, birthYear){
      // Instance Properties
      this.firstName=firstName;
      this.birthYear=birthYear;

      // Bad Idea to create a function inside object
      // this.calAge= function()
      // {
      //       console.log(2024 = this.birthYear);
      // }
};

const personObj = new Person('Bhartesh', 1998);
console.log(personObj);
// new {} is created
// function is called this = {}
// {} linked to prototype
// function automatically return {}
const personObj2 = new Person('Girmal', 1998);
console.log(personObj2);
const personObj3 = new Person('JavaScript', 1972);
console.log(personObj3);
const personObj4 = new Person('React', 2018);
console.log(personObj4);

// we created three objects using constructor function new {}
console.log('____________________________________');
console.log('__________________ Prototypes __________________');

console.log(Person.prototype);

Person.prototype.calAge=function(){
      console.log(2023 - this.birthYear);
}

personObj.calAge();
console.log(personObj.__proto__);
console.log(personObj.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(personObj));

console.log('____________________________________');

// .prototypeOfLinkedObjects
console.log('__________________ prototypeOfLinkedObjects __________________');


Person.prototype.species = 'Living Being';
console.log(personObj.species, personObj2.species);
console.log(personObj.hasOwnProperty('firstName'));
console.log(personObj.hasOwnProperty('species'));

console.log(personObj.__proto__);
console.log(personObj.__proto__.__proto__);
console.log(personObj.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);


console.log('____________________________________');

const arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,0];
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.uniqueValues = function(){
      return [...new Set(this)];
};

console.log(arr.uniqueValues());


