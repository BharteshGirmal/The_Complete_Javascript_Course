'use strict';

const restaurant={
      name:'Cafe Coffee Day',
      location: 'Hinjewadi Phase-1, Pune Maharashtra',
      categories:['Italian','Pizzeria','Vegeterian','Organic'],
      staterMenu:['Garlic','Caprese Salad','Focaccia','Bruschetta'],
      mainMenu:['Pizza','Pasta','Risotto'],
      orderFood:function(starterIndex, mainIndex){
            return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]];
      }
};

const arr=[1,2,3];
const a =arr[0];
const b =arr[1];
const c =arr[2];

// Destructring  
const [x,y,z]=arr;
console.log(x,y,z);
console.log(arr);

// taking only reletaive data from array 

let [first, second]= restaurant.mainMenu;
console.log(`The first item is ${first} and the second one is  ${second}`);

// Swapping the values 
[second , first]=[first, second];
restaurant.staterMenu.push('Tomato Sauce');
restaurant.staterMenu.push('Chicken Tikka Masala');
console.log('After swapping ',restaurant);
console.log(`The first item is ${first} and the second one is  ${second}`);

console.log(restaurant.orderFood(0,1));

const [starter, main] = restaurant.orderFood(0,0);
console.log(starter, main);


// for nested Array Destructring
const nested=[2,4,[1,2]];

const [i, , [j, k]]= nested;
console.log(i, j, k);

// setting Default values 

const [p=1,q=1,r=1] =[8, 9];
console.log(p, q, r);




