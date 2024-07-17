console.log(document.querySelector('.message').textContent);

// if want to access by ID use #

// document.querySelector('.message').textContent= '💯 Correct Number' ;

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


// Events in javascript
// document.querySelector('.class').textContent;
// document.querySelector('#id'),textContent;

// document.querySelector('.class').addEventListener('class', function(){
// 
//      console.log(document.querySelector('.class'))
//})`


// calling the event listeners

let secretNumber = Math.trunc(Math.random()* 20 )+1;
// * 20 defines the range from 1-20 
// trunc converts the decimal into single value
console.log(secretNumber);
let score=20;
let highScore=0;
// assigning the random number to number class fields

document.querySelector('.check').addEventListener('click', function(){
      const guess= Number(document.querySelector('.guess').value);
      // using NUmber because inputs are always in string format 
      console.log(guess);
      if(!guess)
      {
            document.querySelector('.message').textContent='🙅🏼⛔No Number !'
      }

      else if(guess === secretNumber)
      {
            document.querySelector('.message').textContent='🤝 Correct Number Buddy !'
            
            document.querySelector('.number').textContent= secretNumber;

            document.querySelector('body').style.backgroundColor="#60b347";

            document.querySelector('.number').style.width='30rem';
            
            if(score > highScore)
            {
                  highScore=score;
                  document.querySelector('.highscore').textContent=highScore;
            }
      }
      else if(guess !== secretNumber)
      {
            if(score>1)
            {
                  document.querySelector('.message').textContent= guess > secretNumber? '📈 Too High !':'📉 too Low !';
                  score--;
                  document.querySelector('.score').textContent=score;
            }
            else{
                  document.querySelector('.message').textContent=" 💨💨You lost the Game buddy💨💨";
                  document.querySelector('body').style.backgroundColor='red';
            }
      }
      // else if(guess > secretNumber)
      // {
      //       if(score>0)
      //       {
      //             document.querySelector('.message').textContent='⛔ Too High !';
      //             score--;
      //             document.querySelector('.score').textContent=score;
      //       }
      //       else{
      //             document.querySelector('.message').textContent=" 💨💨You lost the Game buddy💨💨";
      //             document.querySelector('body').style.backgroundColor='red';
      //       }
      // }
      // else if(guess < secretNumber)
      // {
      //       if(score>0)
      //       {
      //             document.querySelector('.message').textContent='⛔ Too Low !';
      //             score--;
      //             document.querySelector('.score').textContent=score;
      //       }
      //       else
      //       {
      //             document.querySelector('.message').textContent=" 💨💨You lost the Game buddy💨💨";
      //             document.querySelector('body').style.backgroundColor='red'; 
      //       }
      // }
      else if(guess !== secretNumber)
      {
            document.querySelector('.message').textContent='⛔ Wrong Number!' 
      }
})


// this will print the value as soon as the event happens

// to start the game Again 

document.querySelector('.again').addEventListener('click',function(){
      score=20;
      secretNumber = Math.trunc(Math.random()* 20 )+1;
      document.querySelector('.score').textContent=score;
      document.querySelector('.number').textContent='?';
      //document.querySelector('.message').textContent="Start Guessing...";
      displayMessage('Start Guessing...');
      document.querySelector('.guess').value='';
      document.querySelector('body').style.backgroundColor='#222';
      document.querySelector('.number').style.width='15rem';
});

const displayMessage= function(msg)
{
      document.querySelector('.message').textContent=msg;

}

//Now  start using refractring DRY (Do not Repeat Yourself) Principle in this code 