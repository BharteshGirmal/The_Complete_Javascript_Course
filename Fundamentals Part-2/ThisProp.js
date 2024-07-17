const person={
      firstName:'Bhartesh',
      lastName:"Girmal",
      birthyear:1998,
      job:'Developer',
      friends:['Michael','Peter','Steven'],
      hasDriverlicense:true,
      calcAge:function (birthyear)
      {
            console.log(this);
            this.age=2023- this.birthyear;
            // creating a another key in current object
            return this.age;
      },

      getSummary:function(){
            return `${this.firstName} is a ${this.calcAge()} years Old ${this.job}, and he have ${this.hasDriverlicense ? 'a':'No'} License`;
      }
};

console.log(person);
console.log(person.calcAge());
// or using bracket property
console.log(person["calcAge"](1998));

console.log(person.getSummary());





