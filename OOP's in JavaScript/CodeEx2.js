/** 
 * 
 * Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h


*/

class Car {

      constructor(make, speed){
            this.make=make;
            this.speed=speed;
      }

      get SpeedUs(){
            return this.speed /1.6;
      }
      set SpeedUs(speed){
            return this.speed *1.6;
      }

      brake(){
            this.speed -=5;
            console.log(`${this.make} car is breaking at ${this.speed}Km/h`);
      }

      accelerate(){
            this.speed +=10;
            console.log(`${this.make} car is accelerating at ${this.speed}Km/h`);
      }
}

const bmw= new Car('Ford', 120);
console.log(bmw.SpeedUs);
bmw.accelerate();
bmw.brake();