
const airLine2= 'TAP Air Bharat';

console.log(airLine2.toLowerCase());
console.log(airLine2.toUpperCase());

// fixning the capitalization in name 

const passenger='bhartesh';
const passengerLower = passenger.toLowerCase();
const passengerUpper = passenger[0].toUpperCase()+passenger.slice(1);

console.log(passengerLower);
console.log(passengerUpper);

// Comparing Emails 

const email = 'hello@gmail.io';
const loginEmail = 'Hello@gmail.Io \n';

const lowerEmail = loginEmail.toLowerCase();
// to trim the white spaces and escape chracters      
const trimEmail = loginEmail.trim();
console.log(trimEmail);

const normalEmail= loginEmail.toLowerCase().trim();
console.log(normalEmail);

console.log(email === normalEmail);

// Replacing 

const priceGB='288.97%';

const priceUS= priceGB.replace('%', '$').replace('.',',');
console.log(priceUS);

const announcement= 'All passengers come to bording door 23, bording door 23!';
console.log(announcement.replace('door', 'gate'));
// using regex
console.log(announcement.replace(/door/g, 'gate'));
// g stands for global


// booleans 

const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));
console.log(planes.startsWith('A'));
console.log(planes.endsWith('o'));

if(planes.startsWith('Airbus') && planes.endsWith('neo'))
{
      console.log('part of the NEW ARIBUS Family');
}


const checkBaggage = function (items){
      const baggage = items.toLowerCase();
      if(baggage.includes('knief') || baggage.includes('gun')){
            console.log('You are NOT allowed on board');
      }
      else
      {
            console.log('Welcome aboard !!!');
      }
}

checkBaggage('I have a laptop, some food and pocket knief');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

