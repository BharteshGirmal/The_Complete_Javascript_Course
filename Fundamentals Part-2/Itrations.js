console.log('Itrations for the Loop');

for(let i=0;i<=10;i++)
{
      console.log(`Lifiting the weights for Competition ${i}🏋️`);
};

const johnArray=[
      'Johns',
      'Schemedtmann',
      2037-1991,
      'techer',
      ['Michael','Peter','Steven'],
      true
]
const types=[];
const types2=[];
for(let x=0;x < johnArray.length;x++)
{
      console.log(johnArray[x]);
      console.log(typeof(johnArray[x]));
      types[x] = typeof(johnArray[x]);
      types2.push(typeof(johnArray[x]));
}

console.log(types);
console.log(types2);

const years=[1991,1992,1993,1994,1995,1996,1997,1998];
const currentAges=[];

for(let y=0; y< years.length ;y++)
{
      currentAges.push(2023 - years[y]);
}

console.log(currentAges);

// continue and break

console.log('Printing only Strings');

for(let a=0;a<johnArray.length;a++)
{
      if(typeof johnArray[a] !== 'string') continue
      console.log(johnArray[a], typeof johnArray[a]);
}

for(let m=0;m<3;m++)
{
      console.log(`________ Starting Exercise 👽 ${m} ________`);

      for(let n=0;n<=4;n++)
      {
            console.log(`Lifting the Weight 🏋️${n} Times`);   
      }
}

let count=1;
while (count <= 10) // while loop
{
      console.log(`Lifting the Weight 🏋️${count} Times`);   
      count++;
}

// Random Number

let dice = Math.trunc( Math.random()*6)+1;
console.log(dice);

while(dice !==6)
{
      console.log('Hurrey ...');
      dice= Math.trunc( Math.random()*6)+1;
}

const calcTip =function(bill)
{
      return bill>=50 && bill<=300 ?bill*0.15:bill*0.20;
}

const bills=[22.295,176,440,37,105,10,1100,86,52];

const tips=[];
const totals=[];

for(let r=1;r<bills.length;r++)
{
      const tip = calcTip(bills[r]);
      tips.push(tip);
      totals.push((bills[r]+tips));
      
}
console.log(bills, tips, totals);

const calcAvarage=function(arr){
      let sum=0;
      for(let i=0;i<arr.length;i++){
            sum+= arr[i] ;
      }

      return sum/arr.length;
}

console.log(calcAvarage(bills));