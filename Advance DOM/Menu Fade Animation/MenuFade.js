console.log("Menu Fade Animation");

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', function(e){
      if(e.target.classList.contains('nav__link')){
            const link = e.target;
            console.log(link);
            const siblings = link.closest('.nav').querySelectorAll('.nav__link');

            const logo = link.closest('.nav').querySelector('img');

            siblings.forEach(el => {
                  if(el !== link)
                  {
                        el.style.opacity = 0.5;
                  }
            });
            logo.style.opacity=0.5;
      }
});

nav.addEventListener('mouseout', function(e){
      if(e.target.classList.contains('nav__link')){
            const link = e.target;
            console.log(link);
            const siblings = link.closest('.nav').querySelectorAll('.nav__link');

            const logo = link.closest('.nav').querySelector('img');

            siblings.forEach(el => {
                  if(el !== link)
                  {
                        el.style.opacity = 1;
                  }
            });
            logo.style.opacity=1;
      }

});

// using passing arguments to event handlers 

const handleover = function(e, opacity)
{
      if(e.target.classList.contains('nav__link')){
            const link = e.target;
            const siblings = link.closest('.nav').querySelectorAll('.nav__link');

            const logo = link.closest('.nav').querySelector('img');

            siblings.forEach(el => {
                  if(el !== link)
                  {
                        el.style.opacity = opacity;
                  }
            });
            logo.style.opacity=opacity;
      }

};

nav.addEventListener('mouseover', function(e){
      handleover(e,0.5);
});
nav.addEventListener('mouseout', function(e){
      handleover(e,1);
});

// OR 
// passing "arguments" to handlers
// we have to use this to access that value 
nav.addEventListener('mouseover',handleover.bind(0.5));
nav.addEventListener('mouseout',handleover.bind(1));