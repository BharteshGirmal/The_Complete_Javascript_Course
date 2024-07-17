// Spread , Because on right side of =

const num =[1, 2,  , [3, 4, 5, 6]];

const [a, b, ...c]=[1, 2, 3, 4, 5 ,6 ,7 ,8 , 9];
console.log(num); // [1, 2,, Array(4)]
console.log([...num]);   // [1, 2,,,Array(4) ]
console.log(a, b, c);


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
};

const before=[...restaurant.mainMenu, ...restaurant.staterMenu];
console.log(before);
const [pizza, , risotto, ...other]=[...restaurant.    mainMenu, ...restaurant.staterMenu];
console.log( pizza, risotto , other );

//Objects
const {sat, ...weekdays}=restaurant.openHours;
console.log(weekdays);

// functions

const add =function(...num){
      let sum=0
      for(let i=0; i<num.length; i++)
      {
            sum+=num[i];
      }

      return sum;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));

// short circuitting 
console.log('___________ OR ____________');
console.log(3 || 'Bhartesh');
console.log('' || 'Bhartesh');
console.log(true || '0');
console.log(undefined || 'null');

console.log('___________ AND ____________');
console.log(3 && 'Bhartesh');
console.log('' && 'Bhartesh');
console.log(true && '0');
console.log(undefined && 'null');

