

const h1 = document.querySelector('.h1');

const alertH1 =function(e){
      alert('AddEventListener : Great ! You are reading the heading :D');
      h1.removeEventListener('mouseenter', alertH1);
};


h1.addEventListener('mouseenter', alertH1);


// h1.onmouseenter = function(e){
//       alert('AddEventListener : Great ! You are reading the heading :D');
// };

