// tabbed components


const tabs = document.querySelectorAll('.operations__tab');

const tab_container =document.querySelector('.operations__tab-container');
const tab_content=document.querySelector('.operations__content');


// tabs.forEach(tab=> tab.addEventListener('click', function(e){}));

// using event delegation 

tab_container.addEventListener('click', function(e){
      const clicked = e.target.closest('.operations__tab');
      console.log(clicked);

      // Guard Clause 
      if(!clicked) return;

      // Active tabs 
      tabs.forEach(t=> t.classList.remove('operations__tab--active'));
      
      // tab_content.forEach(ct=>ct.classList.remove('operations__content--active'));

      clicked.classList.add('operations__tab--active');

      //Activate content Area
      console.log(clicked.dataset.tab);

      document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
