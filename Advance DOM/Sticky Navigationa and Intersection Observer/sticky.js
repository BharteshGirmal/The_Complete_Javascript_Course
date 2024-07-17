// sticky naviagtion

const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const initialCords =section1.getBoundingClientRect();
window.addEventListener('scroll', function (e){
      // console.log(this.window.scrollY);

      if(this.window.scrollY > initialCords.top)
      {
            nav.classList.add('sticky')
      }
      else
      {
            nav.classList.remove('sticky');
      }
});

// Intersection Observer


const obsCallback = function(entries, observe){
      entries.forEach(entry => {
            console.log(entry);
      });
};

// const obsOptions={
//       root:null,
//       threshold:0.1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header= document.querySelector('.header');
const navheight= nav.getBoundingClientRect().height;
console.log(navheight);
const headerObserver= new IntersectionObserver(
      (entries)=>{  
            const [entry]= entries;
            console.log(entry);
            if(entry.isIntersecting)
            {
                  nav.classList.add('sticky');
            }
            else
            nav.classList.remove('sticky');

      } ,{
            root:null,
            threshold:0,
            rootMargin:`-${navheight}px`,
      }
);

headerObserver.observe(header);


// Reveal Sections 

const allSection = document.querySelectorAll('.section');


const revealSection = function(entries, observer){
      const [entry]= entries;
      if(entry.isIntersecting) return;

      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);

}

const sectionObserver= new IntersectionObserver(revealSection,{
      root:null,
      threshold:0.15,

});
allSection.forEach(function(section){
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
});

const  imgTarget= document.querySelectorAll('img[data-src]');

const loadImg= (entries, observer)=>{
      const [entry]= entries;
      if(!entry.isIntersecting) return;
      entry.target.src =entry.target.dataset.src;
      entry.target.addEventListener('load', function(){
            entry.target.classList.remove('lazy-img');
      });
      observer.unobserver(entry.target);
};

const lazyObserver= new IntersectionObserver(loadImg,
      {
            root:null,
            threshold:0,
            rootMargin:`-200px`,
      });

imgTarget.forEach(function(section){
      lazyObserver.observe(section);
});