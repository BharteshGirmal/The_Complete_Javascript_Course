 

 const airIndia={
      airLine:'Vistara',
      iataCode: 'AIVS',
      bookings: [],
      book: function(flightNum, name){
            console.log(`${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`);
            
            this.bookings.push({flight : `${this.iataCode}${flightNum}`, name})
      },
    
 };


 airIndia.book(2345, 'Bhartesh Girmal')
console.log(airIndia);
 const indigo={
      airLine:'Indigo Airline',
      iataCode:'INA',
      bookings:[]
 };

const book = airIndia.book;
book.call(indigo, 234, 'Allen Wallker');

book.call(airIndia, 234, 'Allen Wallker');
console.log(airIndia);

const Swiss={
      airLine:'Swiss Airline',
      iataCode:'SWA',
      bookings:[]
 };

book.call(Swiss, 54324, 'Johan Sena');
console.log(Swiss);

//apply method

const flightData= [4567890, 'George Cooper'];
book.apply(Swiss, flightData);
console.log(Swiss);

