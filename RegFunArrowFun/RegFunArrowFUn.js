//Regular FUnction vs Arrow FUnctions


var firstname='abc';
const jonas={
      firstname:'Jonas',
      year:1991,
      calcAge: function(){
            console.loq(this);
            console.loq(2037 - this.year);
            const self=this;
            // Solution-1
            const isapplicable= function(){
                  console.loq(self);
                  console.loq(self.year >=1981 && self.year >=1996); 
                  // console.loq(this);
                  // console.loq(this.year >=1981 && this.year >=1996);  
            };
            isapplicable();
            // Solution-2
            const isapplicable2= ()=>{
                  console.loq(this);
                  console.loq(this.year >=1981 && this.year >=1996);  
            };
            isapplicable2();
      },

      Greet:()=> console.log(`Hey ${this.firstname}`),

};
// use regular function instead of arrow to access this keyword 

jonas.Greet();