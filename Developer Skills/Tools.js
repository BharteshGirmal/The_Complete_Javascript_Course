'use strict'; 
//Challenge - We worl for a company building a snart home thermameter. our most recent task is this: "Given an array of tempratures of one day, calculate the temprature amplitude. keep in mind that sometimes there might be a sensor error."

const tempratures=[3, -2,-6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understand the problem 
// 2) Breaking up into sub-problems
const calcTempAmplitude= function(arr1, arr2){

      let max=temp[0];
      let min=temp[0];
      const temp= arr1.concat(arr2);
      for(let i=0; i< temp.length; i++)
      {
            const currTemp=temp[i];
            if(temp[i] > max) max=temp[i];
            if(temp[i] < min) min=temp[i];

      }
      console.log(max);

      return max-min;
}

const amplitude= calcTempAmplitude([3,5,1],[9,0,5]);

console.log(amplitude);