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


const rest1={
      name:'ABCD',
      numGuest:0,
}

const rest2={
      name:'PQRS',
      owner:'Bhartesh',
}

// rest1.numGuest = rest1.numGuest || 100;
// rest2.numGuest = rest2.numGuest || 100;

rest1.numGuest ||=20;
rest2.numGuest ||=100;
console.log('Using OR Operator...')
console.log(rest1);
console.log(rest2);


rest1.numGuest ??=200;
rest2.numGuest ??=100;
console.log('Using Nullish Coalescing Operator...')
console.log(rest1);
console.log(rest2);

rest2.owner &&='<ANOYMOUS>';
console.log(rest2);