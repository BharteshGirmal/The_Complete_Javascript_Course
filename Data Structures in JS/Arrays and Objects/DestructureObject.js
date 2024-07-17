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
};
// passing the object as a input 

restaurant.orderDelivery({
      time:'22:30',
      address:'vis nibs mkoma, 32',
      mainIndex: 2,
      starterIndex:2,
});

// argument name matters instead of sequence
// use this meathod to access that obj  
console.log('The food is ready');


// Destructring the Objects

const {name, openHours, categories}= restaurant;
console.log(name , openHours, categories);
const {name:restaurantname, openHours:hours, categories:tags}= restaurant;
console.log(name , openHours, categories);

const {menu=[], mainMenu=[]}= restaurant;
console.log(menu, mainMenu);

console.log(`Name of Restaurant ${name}`);  // Name of   
// Mutating the variable 

let a= 111;
let b=222;
const obj ={a:234, b:333, c:245};
({a,b,c}= obj);
console.log('After destructuring',obj,'\n','a=',a ,'b=',b );

// Nested Objects 

const {
      fri:{open , close}
}= openHours;
console.log(open, close);


