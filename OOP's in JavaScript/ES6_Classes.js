// class expression

const Personobj = class{};


// class declaration
class Person{

      constructor(firstName, birthYear){
            this.firstName=firstName;
            this.birthYear=birthYear;
      }

      calAge(){
            console.log(2037 - this.birthYear);
      }

      set fullName(first){
            console.log(first);
            if(first.includes(' ')){
                  this._firstName=first;
            }
            else alert(`${first} is not a first name `);
      }

      get fullName(){
            return this._firstName;
      }

      static Hey(){
            console.log("Hello 🙋🏼‍♂️");
      }

};


const Bhartesh = new Person('Bhartesh', 1998);
console.log(Bhartesh);

Bhartesh.calAge();

console.log(Bhartesh.__proto__ === Person.prototype);


Person.Hey();

// Note:
// 1.Classes are not hoisted
// 2.Classes are first-class citizens
// 3.Classes are Executed in Strict mode 


console.log('Setters and Getters');

const account ={
      owner:'bhartesh',
      movements:[100,200,300,400,500],


      get latest(){
            re
            return this,this.movements.slice(-1).pop()
      },

      set latest(value)
      {
            this.movements.push(value);
      },

}

account.latest= 333;
console.log(account.movements);

// Static Functions

Person.Hello = function(){
      return [1,23,4,5,6,6];
};

console.log(Person.Hello());


console.log('Prototypal Inheritance');
console.log('Object.Create');

const PersonProto= {
      calAge(){
            console.log(2037 - this.birthYear);
      }
}


const steven = Object.create(PersonProto);

console.log(steven);
steven.firstName = 'steven';
steven.birthYear = 1998;
steven.calAge();


console.log('Inheritance Between Classes and Functions');

const Person1 = function(firstName, birthYear){
      this.firstName=firstName;
      this.birthYear=birthYear;
}

Person1.prototype.calAge= function(){
      console.log(2024 - this.birthYear);
};


const Student = function(firstName, birthYear, course){
      Person1.call(this, firstName, birthYear);
      this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.Introduce = function(){
      console.log(`My name is ${this.firstName} and I studing in ${this.course} and I'm ${this.calAge()} years old`);
}

Student.prototype.calAge=function() {
      return(2024 - this.birthYear)
}

const mike = new Student('Mike', 1998, 'JavaScript');
console.log(mike);
mike.Introduce();
mike.calAge();

console.log(mike.__proto__);

