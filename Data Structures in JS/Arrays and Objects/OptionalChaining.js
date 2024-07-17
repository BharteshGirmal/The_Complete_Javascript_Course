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
      order: function(starterIndex, mainIndex){
            console.log([this.staterMenu[starterIndex], this.mainMenu[mainIndex]]);
      },
      orderDelivery: function ({starterIndex, mainIndex, time, address}){
            console.log(`Order received! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be Deleverd to ${address} at ${time} Enjoy the meal !!!`
            );
      },
};

if(restaurant.openHours.mon)
console.log(restaurant.openHours.mon.open);

if(restaurant.openHours.fri)
console.log(restaurant.openHours.fri.open);

if(restaurant.openHours && restaurant.openHours.mon)
console.log(restaurant.openHours.mon.open);

// with optional chaning
console.log(restaurant.openHours.mon?.open);

const days=['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

console.log(days);

for(const day of days)
{
      console.log(day);
      const open = restaurant.openHours[day]?.open ?? 'closed';
      console.log(`On ${day}, we open at ${open}`);
}

//optional chaining on methods 

console.log(restaurant.order?.(0, 1) ?? 'Method not Exists');
console.log(restaurant.orderAny?.(0, 1) ?? 'Method not Exists');

//arrays

const users =[{name:'bhartesh', email:'
bharteshgirmal'}];

console.log(users[0]?.name ?? 'User Array Empty');