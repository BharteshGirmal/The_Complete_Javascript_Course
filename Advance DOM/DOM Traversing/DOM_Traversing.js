// DOM Traversing 

console.log('DOM Traversing');

const h1= document.querySelector('h1');

// Going downwords : child
console.log("Going downwords : child");
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstChild);
console.log(h1.firstElementChild);
h1.firstElementChild.style.color='white';
console.log(h1.lastChild);
console.log(h1.lastElementChild);
h1.lastElementChild.style.color='orange';

// going upwords : parents
console.log("going upwords : parents");
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'grey';

// Going sideways : Siblings
console.log("Going sideways : Siblings");
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
      if(el != h1)
      {
            el.style.transform = 'scale(0.5)';
      }
});

