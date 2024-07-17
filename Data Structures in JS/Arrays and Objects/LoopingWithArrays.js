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


const Menu = [...restaurant.staterMenu, ...restaurant.mainMenu];

for(const item of Menu)
{
      console.log(item);
}

for(const item of Menu.entries()) console.log(item);
