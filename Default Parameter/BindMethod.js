

const airIndia={
      airLine:'Vistara',
      iataCode: 'AIVS',
      bookings: [],
      book: function(flightNum, name){
            console.log(`${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`);
            
            this.bookings.push({flight : `${this.iataCode}${flightNum}`, name})
      },
    
 };

 const indigo={
      airLine:'Indigo Airline',
      iataCode:'INA',
      bookings:[]
 };

const book = airIndia.book;
const bookEw= book.bind(indigo, 234567);

// iuisng bind method function gets its this 
bookEw('Bhartesh Girmal');
bookEw('Martha Cooper');
bookEw('Vikram Rathore');


// With Event Listener

airIndia.planes = 300;

airIndia.buyPlane = function(){
      console.log(this);
      this.planes++;
      console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click',airIndia.buyPlane.bind(airIndia));

// Partial Application
console.log('Partial Application ');
const addTax= (rate, value)=>value+value *rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); 
console.log(addVAT(100));  
console.log(addVAT(200));  
console.log(addVAT(34));  


const tax = function(rate){
      return function(value){
            return value + value * rate;
      };
};
console.log('using call back function');
console.log(tax(300)(.23));