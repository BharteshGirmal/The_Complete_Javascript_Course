// Immediately Invocked Function Expression
console.log('Immediately Invocked Function Expression');

const runOnce = function(){
      console.log('This will never run again');
}

runOnce();

(function(){
      console.log("I am a normal function");
})();

(()=>console.log('this is also IIFE expression'))();