const rest = new Map();
rest.set('name', 'Cafe Coffee Day');
rest.set(1, 'Bharat');
rest.set(2, 'Itlay');
rest.set(3, 'France');

console.log(rest);

console.log(rest.get('name'));

console.log(rest.get(true));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'we are open :D')
.set(false, 'we are Closed :(');

console.log(rest);

const time =21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));


// maps itrations 

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

const questions =new Map([['question', 'what is the best programming langauge in the world?'],[1,'C'],[2,'JAVA'],[3,'JAVASCRIPT'],['correct',3],[true, 'correct'],[false, 'try again']]);

console.log('without Object entries');
console.log(questions);
for (let [key , value] of questions){
      if (!value || !value[0]){
            continue;}
            console.log(`${key} - ${value}`);
            };

console.log('using Object entries');
const hoursmap= new Map(Object.entries(restaurant.openHours));
console.log(hoursmap);

console.log(questions.get('question'));
for(const [key, value] of questions)
{
      if(typeof(key)=== 'number')
      console.log(`Answers:   ${key}.    ${value}`);
}

const answer= Number(prompt('Your Answer'));
console.log(answer);

console.log(questions.get(questions.get('correct') === answer));

// convert map to array 

console.log([...questions]);
console.log(...questions.entries());
console.log(...questions.keys());
console.log(...questions.values());