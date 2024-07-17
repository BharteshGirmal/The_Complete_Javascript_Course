console.log(this);


const calcAge= function (birthyear){
      console.log(2037 - birthyear);
      console.log(this); // undefined
}

calcAge(1991);

// this for arrow function
const calcAge2=  (birthyear)=>{
      console.log(2037 - birthyear);
      console.log(this); // window
}

calcAge(1991);


const ABC={
      year:1991,
      calcAge:function{
            console.log(this);
      }
}

ABC.calcAge();

// Object calling the method

const anything={
      year:1998,
}

// copying the method from a anathor object
anything.calcAge = ABC.calcAge;
// this is get assigned from the anything object 
console.log(anything);
anything.calcAge();


const x = ABC.calcAge;

x();
// undefined beacause its a normal function