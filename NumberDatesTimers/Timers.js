setTimeout(() => {
      console.log('SetTomeout function is get called ...');
}, 2000);

console.log('Waiting for SetTomeout function');


setTimeout((ing1, ing2) => {
      console.log(`The dish is ready it contains ${ing1} and ${ing2} `);
}, 3000, 'pizza', 'pasta');

const ingredients= ['olive', 'spinach'];

const pizzatimer= setTimeout((ing1, ing2) => {
      console.log(`Here is your pizza with ${ing1} and ${ing2}`);
}, 3000, ...ingredients);
// destructring the ingredients array to ing1 and ing2

if(ingredients.includes('spinach')) clearTimeout(pizzatimer);


// setInterval(() => {
//       const now = new Date();
//       console.log(now);
// }, 1000);

// Timers 

const LabelTimer= document.querySelector('.timer');
const startLogoutTimer =function(){
      let time =10;
      const timer =setInterval(() => {
            const min = String(Math.trunc(time/60));
            const sec = String(time % 60).padStart(2, 0);
            console.log(`${min}:${sec}`);
           LabelTimer.textContent =`${min}:${sec}`;
            time--;

            if(time === 0){
                  clearInterval(timer);
                  LabelTimer.textContent =`Log in to get continue`; 
            }
            
      }, 1000);
      

}

startLogoutTimer();
