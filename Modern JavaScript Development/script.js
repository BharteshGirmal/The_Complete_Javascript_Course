// import {addToCart, totalPrice as Price ,totalQuantity as Qty} from  './shoppingCart';
// console.log('Importing the Module...');

// addToCart("Bread", 200);
// console.log(Price,Qty);

// import * as shoppingCart from './shoppingCart.js';

// shoppingCart.addToCart('Banana', 2);
// console.log(shoppingCart);

// console.log('Top Level Await');

// const getLastPost = async function() {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data);

//     return { title: data[data.length - 1].title, text: data[data.length - 1].body };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// // Option 1: Using async/await
// const fetchAndDisplay = async () => {
//   const lastPost2 = await getLastPost();
//   console.log('Using await:', lastPost2);
// };
// fetchAndDisplay();

// // Option 2: Using .then()
// getLastPost().then(lastPost => {
//   console.log('Using .then():', lastPost);
// });


console.log('Module Pattern');

const ShoppingCart = (function(){
      const cart = [];
      const shippingCost =100;
      const totalPrice = 20;
      const totalQuantity= 10;

      const addToCart = function(product, quantity){
            cart.push({product, quantity});
            console.log(`${quantity}, ${product} added to cart`);
      }

      const orderStock = function(product, quantity){
            console.log(`${quantity}, ${product} ordered from supplier`);
      }

      return{
            addToCart,
            orderStock,
            cart,
            totalPrice,
            totalQuantity
      }
})();
console.log(ShoppingCart);
ShoppingCart.addToCart('Apple', 10);
ShoppingCart.addToCart('Banana', 20);
ShoppingCart.orderStock('coke', 1);
ShoppingCart.orderStock('mirinda', 10);

console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.shippingCost);