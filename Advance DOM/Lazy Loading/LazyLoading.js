// console.log('Lazy Loading in JS');


// const header= document.querySelector('.header');


// const  imgTarget= document.querySelectorAll('img[data-src]');

// const loadImg= (entries, observer)=>{
//       const [entry]= entries;
//       if(!entry.isIntersecting) return;
//       entry.target.src =entry.target.dataset.src;
//       entry.target.addEventListener('load', function(){
//             entry.target.classList.remove('lazy-img');
//       });
//       observer.unobserver(entry.target);
// };

// const lazyObserver= new IntersectionObserver(loadImg,
//       {
//             root:null,
//             threshold:0,
//             rootMargin:`-90px`,
//       });

// imgTarget.forEach(function(section){
//       lazyObserver.observe(section);
// });
console.log('Slider Navigation');

const slides = document.querySelectorAll('.slide');


const btnLeft= document.querySelector('.slider__btn--left');
const btnRight= document.querySelector('.slider__btn--right');

slides.forEach((s, i)=>{
      s.style.transform=`translate(${100 * i})`;
});

let currentSlide=0;
const maxslide = slides.length;

const gotoSlide = (slide)=>{
      slides.forEach((s, i)=>{
            // i is the index of the slides
            s.style.transform=`translate(${100 * (i-slide)}%)`;
      });
}

gotoSlide(0);

const nextSlide= ()=>{
      if(!currentSlide === maxslide -1 )  
      {
            currentSlide++;
      }
      else
      {  
            currentSlide=0;
      }
      gotoSlide(currentSlide);  
}
const prevSlide= ()=>{
      if(currentSlide === 0 )  
      {
            currentSlide=maxslide -1 ;
      }
      else+
      {  
            currentSlide--;
      }
      gotoSlide(currentSlide);  
}
btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);

// key press events 

document.addEventListener4('keydown', function(e){

      console.log(e);
      if(e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
});