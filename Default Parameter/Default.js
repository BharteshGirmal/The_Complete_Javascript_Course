'use strict';

const bookings = [];
const createBooking = function(flightNum, numPassengers= 1, price= 200){

      // numPassengers= numPassengers || 1
      // price = price || 100;
      const booking={
            flightNum,
            numPassengers,
            price
      }
      console.log(booking);
      bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH133', undefined , 204);

