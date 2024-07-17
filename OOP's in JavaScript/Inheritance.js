class Person{

      constructor(firstName, birthYear){
            this.firstName=firstName;
            this.birthYear=birthYear;
      }

      calAge(){
            return(2024 - this.birthYear);
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


class student extends Person {
      constructor(fullName, birthYear, course){
            super(fullName, birthYear);
            this.course=course;
      }
      Introduce (){
            console.log(`My name is ${this.fullName} and I studing in ${this.course} and I'm ${this.calAge()} years old`);
      }
}


const ABC = new student('Bhartesh', 1998, 'JavaScript');

ABC.Introduce();