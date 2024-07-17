// Advanced DOM 

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header= document.querySelector('.header');

const allsections = document.querySelectorAll('.section');

console.log(allsections);

const section = document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
// It returns the html elements 
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting the elements 

const message = document.createElement('div')
// creating a new element - div
message.classList.add('cookie-message');
message.innerHTML=`We use coolies for improved funvtionality and analytics.       <button class='btn btn--close-cookie'>Got it!</button>`;

header.prepend(message);

// header.append(message);
header.append(message.cloneNode(true));


// header.before(message)
// header.after(message)


document.querySelector('.btn--close-cookie'),addEventListener('click', function(){
      message.remove();
      // or
      //message.parentElement.removeChild(message);
});


// styles
// inline styles
message.style.backgroundColor ='#37383d';
message.style.width= '120%';

// to get the pre css styles of an element 

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);


message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 +'px';

document.documentElement.style.setProperty('--color-primary', 'orangered')


// attributes 

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

logo.alt = 'Beautifull minimilistic logo';
//
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src'));


const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// classes 

// logo.classList.add('cls');
// logo.classList.remove('cls');
// logo.classList.toggle('active');
// logo.classList.contains('active');


// scrolling effect
const section1= document.querySelector('#section--1');

const btnScrollTo = document.querySelector('.btn--scroll-to');


btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y)', window.scrollX, scrollY);

  console.log('Height and viewport ',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
        ); 

    // scrolling       
    // window.scrollTo(s1coords.left+window.scrollX, s1coords.top+window.scrollY);

    // window.scrollTo({
    //   left: s1coords.left + window.scrollX,
    //   top: s1coords.left + window.scrollY,
    //   behavior:'smooth',
    // });

    section1.scrollIntoView({behavior:'smooth'})
        
});


const h1 = document.querySelector('.h1');

const alertH1 =function(e){
      alert('AddEventListener : Great ! You are reading the heading :D');
      h1.removeEventListener('mouseenter', alertH1);
};


h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.addEventListener('mouseenter', alertH1);
}, 3000);


const randomInt = (min,max)=>
      Math.floor(Math.random() * (max -min +1) + min);

const randomColor = ()=>
`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;


//Attaching Event Handlers 

document.querySelector('.nav__link').addEventListener('click', function (e) {
      e.currentTarget.style.backgroundColor = randomColor();
      console.log("LINK", e.target);
  });
  
// stop Propagation

document.querySelector('.nav__links').addEventListener('click', function(e){
      e.currentTarget.style.backgroundColor = randomColor();
      console.log("CONTAINER", e.target);
     // e.stopPropagation();
});

document.querySelector('.nav').addEventListener('click', function(e){
      e.currentTarget.style.backgroundColor = randomColor();
      console.log("NAV", e.target);
});

// .addEventListener('click', function(e){
// }, true);
