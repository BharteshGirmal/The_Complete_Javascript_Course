console.log('_________________ Split _________________');

const str = 'a+very+nice+string';
console.log(str);
console.log(str.split('+'));
console.log('Bhartesh Girmal'.split(' '));

const [firstmname, lastname ]= 'Bhatrtesh Girmal'.split(' ');

const name = ['Mr.', firstmname, lastname.toUpperCase()].join(' ');

console.log(name);

const capitalName= function(name){
      const names= name.split(' ');
      const namesupper =[];
      for(const word of names)
      {
           // namesupper.push(word[0].toUpperCase()+word.slice(1));
            // using replace method 
            namesupper.push(word.replace(word[0], word[0].toUpperCase()));

      }

      console.log(namesupper.join(' '));
}     
const passenger = 'Monako ann smith davis';
capitalName(passenger);

// padding 
const msg = 'Go to gate 23';
console.log(msg.padStart(25, '+'), msg.padEnd(25, '+'));
console.log('Bhartesh'.padStart(20, '-'));
console.log('Bhartesh'.padEnd(20, '-'),'Bhartesh'.padEnd(25, '-'));

const maskCreditCard = function(number){
      const str= String(number);

      const last = str.slice(-4);
      return last.padStart(str.length, '*');
}

console.log(maskCreditCard(876786575548));
console.log(maskCreditCard('87876543548'));


// Repeat

const message= 'Bad weather... All Departures Delayed...';

console.log((message.repeat(5)));

const planesInLine = function (n){
      console.log(`There are ${n} plane in the line ${'*'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);
