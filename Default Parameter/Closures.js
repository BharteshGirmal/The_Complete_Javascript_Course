

// console.log('Closures');

// const secureBooking= function(){
//       let passengerCount =0;
//       return function(){
//             passengerCount++;
//             //            console.log(passengerCount);
//             //            if (passengerCount>3){return false;}else{return true}
//             console.log(`${passengerCount} passenggers`);
//       }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// // closure exapmple 2

// let f ;

// const g = function (){

//       const a= 23;
//       f = function(){
//             console.log(a*2);
//       }
// }

// const h = function(){
//       const b =777;
//       f= function(){
//             console.log(b*2);
//       }
// }

// g();
// f();
// console.dir(f);
// h();
// f();

// example 3

const boardPassengers= function(n, wait){
      const perGroup = n / 3 ;
      setTimeout(() => {
            console.log(`We are now boarding ${n} passengers`); 
            console.log(`There are 3 Groups, each with ${perGroup} passengers`);
      }, wait * 1000);
      console.log(`Will start boarding in ${wait} Second`);
};

boardPassengers(189, 3);