

// rgb(255, 255, 255)

const randomInt = (min,max)=>
      Math.floor(Math.random() * (max -min +1) + min);

const randomColor = ()=>
`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;


//Attaching Event Handlers 

// Child 
document.querySelector('.nav__link'),addEventListener('click', function(e){
      this.style.backgroundColor = randomColor();
});

// Parent
document.querySelector('.nav__links'),addEventListener('click', function(e){
      this.style.backgroundColor = randomColor();
});