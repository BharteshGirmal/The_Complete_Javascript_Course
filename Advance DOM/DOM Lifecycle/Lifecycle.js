console.log('DOM Lifecycle Events');


document.addEventListener('DOMContentLoaded', function(e){
      console.log('HTML parsed and DOM tree built!', e);
});


document.ready(function(e){
      console.log('Using Jquery');
});


window.addEventListener('load', function(e){
      console.log('Page Fully Loaded', e);
});

window.addEventListener('beforeunload', function(e){

      e.preventDefault();
      console.log(e);
      e.returnValue="";
});

// beforeunload 
is called just before closing any browser