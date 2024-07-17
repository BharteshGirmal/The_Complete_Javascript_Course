
console.log("Arrays Example");
const friends=['Bhartesh','Amar','Rahul'];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends);

const years= new Array(1991,1998,1996,1994,2010,2018);

console.log(years);
console.log(years.length);
friends[1].replace('BHARTESH');
console.log(friends);

const calAge= function(birthYear){
      return 2023- birthYear;
}

console.log(calAge(friends[1]));
console.log(calAge(friends.length-1));

const countries=['India','America','Japan','China'];
console.log(countries);

countries.push('Egypt');
console.log(countries);
console.log(countries.indexOf('India'));

countries.unshift('Europe');
console.log(countries);
console.log(countries.indexOf('India'));

countries.pop();
console.log(countries);
console.log(countries.indexOf('India'));

countries.shift();
console.log(countries);

console.log(countries.indexOf('India'));
console.log(countries.includes('India'));
