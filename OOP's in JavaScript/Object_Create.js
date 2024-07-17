const PersonProto= {
      calAge(){
            console.log(2037 - this.birthYear);
      },

      init(firstName, birthYear){
            this.firstName=firstName;
            this.birthYear=birthYear;
      },
}


const studentProto = Object.create(PersonProto);

studentProto.init = function(firstName, birthYear,course){
      PersonProto.init.call(this, firstName, birthYear)
      {
            this.course= course;
      }
}

studentProto.introduce= function(){
      console.log(`My name is ${this.firstName} and I studing in ${this.course} and I'm ${this.calAge()} years old`);
}
const jay = Object.create(studentProto);
jay.init('Jay', 2010, 'Computer Science' );
jay.introduce();
jay.calAge();


///////

class Account{
      // Public Fields
      locale= navigator.language;

      // Private Fiels
      #movements= [];
      constructor(owner, currency, pin){
            this.owner=owner;
            this.currency=currency;
            this._pin=pin;
            this._movements=[];
            //this.locale= navigator.language;
            
            console.log(`Thanks for opening an account, ${owner}`);
      }


            get_movements(){
                  return this._movements;
            }
            deposit(val){
                  this._movements.push(val);
            }

            withdraw(val){
                  this.deposit(-val);
            }
      }


      const account1= new Account('Bhartesh', 'INR', 100000);


      account1.deposit(2334);
      account1.withdraw(342);
      console.log(account1);