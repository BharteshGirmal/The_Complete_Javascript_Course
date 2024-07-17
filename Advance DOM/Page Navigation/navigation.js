
const btnScrollTo = document.querySelector('btn--scrol-to');
const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close--modal');
const btnOpenModal = document.querySelector('.btn--open--modal');

const openModal= function(e){
      e.preventDefault();
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
};

const closeModal= function(e){
      e.preventDefault();
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
};

btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.forEach(btn => btn.addEventListener('click', closeModal));


// on keypress (Escape button) close the scrolling
document.addEventListener('keydown', (e)=>{
if(e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal();
}
})

// button scrolling 
btnScrollTo.addEventListener('click', function(e){
      // const s1coords = section1.getBoundingClientRect();
      // console.log(s1coords);
      // console.log(e.target.getBoundingClientRect());

      // console.log('CurrentScroll (X/Y)', window.scrollX, window.scrollY);

      section1.scrollIntoView({behavior:'smooth'});
})


// Page Navigation 

document.querySelectorAll('.nav__link').forEach(function(el){
      el.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log(e);
            const id = this.getAttribute('href');
            console.log(id);
            document.querySelector(id).scrollIntoView({behavior:'smooth'});
      })
})

// Event Delegation 
// 1. add event listener to the common parent
// 2. determine what element originated the event 

document.querySelector('.nav__links').addEventListener('click', function(e){
      console.log(e.target);

      if(e.target.classList.contains('nav__link'))
      {
            e.preventDefault();
            console.log(e);
            const id = e.target.getAttribute('href');
            console.log(id);
            document.querySelector(id).scrollIntoView({behavior:'smooth'});  
      }
});