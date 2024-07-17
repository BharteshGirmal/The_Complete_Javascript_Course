const arr = [7,8,9];
const newarr=  [1, 2, arr[0], arr[1], arr[2]];
console.log(newarr);

// using spread Oprator
const newarr2=[1, 2, ...arr];
console.log(newarr2)
console.log(...newarr2);

// exapmple 

const restaurant={
      name:'Cafe Coffee Day',
      location: 'Hinjewadi Phase-1, Pune Maharashtra',
      categories:['Italian','Pizzeria','Vegeterian','Organic'],
      staterMenu:['Garlic','Caprese Salad','Focaccia','Bruschetta'],
      mainMenu:['Pizza','Pasta','Risotto'],
      orderFood:function(starterIndex, mainIndex){
            return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]];
      },
      openHours:{
            thu:{
                  open:12,
                  close:22
            },
            fri:{
                  open:11,
                  close:23
            },
            sat:{
                  open:0,
                  close:24
            },
      },
      orderDelivery: function ({starterIndex, mainIndex, time, address}){
            console.log(`Order received! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be Deleverd to ${address} at ${time} Enjoy the meal !!!`
            );
      },

      orderPasta:function(ing1, ing2, ing3){
            console.log(`Here's your declicious pasta with ${ing1}, ${ing2} And ${ing3}`);
      }
};

const newMenu=[...restaurant.mainMenu, 'Misal', 'Vadapav'];
console.log('New Menu : ', newMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log("Main menu copy", mainMenuCopy);

// Join 2 arrays
const arrcopy = [...restaurant.mainMenu, ...restaurant.staterMenu];
console.log(`Arrcopy`, arrcopy);

// Itrables : arrays, strings, maps, set, not objects

const str='Bhartesh';
const letters=[...str, ' ','Girmal'];
console.log(`${letters}`);
console.log(...str);


const ingredients=[prompt('let\'s make a pasta Ingredient1'),prompt('Ingredient 2'),prompt('Ingredient 3')  ];
// without Spread Operator

console.log(restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]));

// using Spread Operator 
restaurant.orderPasta(...ingredients);
console.log(restaurant.orderPasta(...ingredients));


// Objects instead of using Object.assign() use this
const newRestaurant= {founedIn: 1998, ...restaurant, founder:'Bhartesh'};
console.log(newRestaurant);
newRestaurant['name']="Mumbai";
delete restaurant["address"]; // delete property from object
console.log(newRestaurant);

