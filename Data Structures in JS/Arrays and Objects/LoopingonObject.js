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


const properties = Object.keys(restaurant.openHours);
console.log(properties);

let openStr= `We are Open on ${properties.length} Days : `
for(const day of Object.keys(restaurant.openHours)){
      openStr+=`${day}, `
}
console.log(openStr);

//Property values 

const values = Object.values(restaurant.openHours);
console.log(values);

const Entry = Object.entries(restaurant.openHours);
console.log(Entry);

for(const [key , {open , close }] of Entry)
{
      console.log(`on ${key} we open at ${open} and close at ${close}`);
}