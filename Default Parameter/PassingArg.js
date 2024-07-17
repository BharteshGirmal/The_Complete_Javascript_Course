
const flight = 'LH1234';

const bhartesh={
      name:'Bhartesh',
      passport:2345678
}

const checkIn = function(flightNum, passenger)
{
      flightNum = 'LH999';
      passenger.name = 'Mr. '+ passenger.name;

      if(passenger.passport === 2345678)
      {
            alert('checked In');
      }
      else
      {
            alert('Wrong Password');
      }
}

checkIn(flight, bhartesh);
console.log(flight);
console.log(bhartesh);

const newPassport= function(person){
      bhartesh.passport = Math.trunc((Math.random() * (100000000)) + 1 );
}
console.log(bhartesh);
newPassport(bhartesh);
console.log(bhartesh);
checkIn(flight, bhartesh);