
// this is a example for the hoisting 


console.log(me);
console.log(job);
console.log(year);


console.log(Add(2,3));
console.log(AddExpr(2,3));
console.log(Arrow(2,3));

var me='Bhartesh';

var year=1998;

var job='Developer';


function Add(a,b){
      return a+b;
}

const AddExpr= function(a,b){
      return a+b;
}

const Arrow=(a,b)=> a+b;

//
if(!products) deleteShoppingCart();

var products=10;


function deleteShoppingCart(){
      console.log('All Products Deleted...');
}