console.log('Slider Navigation');

const slides = document.querySelectorAll('.slide');


const btnLeft= document.querySelector('.slider__btn--left');
const btnRight= document.querySelector('.slider__btn--right');

const dotContainer= document.querySelector('.dots');

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
      activateDots(currentSlide); 
}
const prevSlide= ()=>{
      if(currentSlide === 0 )  
      {
            currentSlide=maxslide -1 ;
      }
      else
      {  
            currentSlide--;
      }
      gotoSlide(currentSlide); 
      activateDots(currentSlide); 
}
btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);

// key press events 

document.addEventListener4('keydown', function(e){

      console.log(e);
      if(e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
});

// creating a dots navogation 

dotContainer.addEventListener('click', function(e){
      if(e.target.classList.contains('dots__dot'))
      {
            const slide = e.target.dataset.slide;
            gotoSlide(slide);
      }
})

const createDots= function(e,i){
      slides.forEach(function(e, i){
            dotContainer.insertAdjacentHTML('beforend',
                  `<button class="dots__dot" data-slide="${i}"></button>`
            );
      })
};
createDots();

const activateDots= function(slide){
      document.querySelectorAll('.dots__dot').forEach(function(e){
            e.classList.remove('dots__dot--active');
      });

      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}
activateDots(0);