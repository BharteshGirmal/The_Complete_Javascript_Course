import { cloneDeep } from "lodash";


const state={
      cart:[
            {product:"Pizza", Quantity: 10},
            {product:"Burger", Quantity: 12}
      ],
      User:{isLoggedIn:true}
}

const stateClone = Object.assign(state);
console.log(stateClone);

// npm i regenerator-runtime

const deepClone = cloneDeep(state);

state.User.isLoggedIn= true;
console.log(deepClone);

if(module.hot){
      module.hot.accept();
}


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


class Person {
      #greetings ="hey";
      constructor(name){
            this.name= name;
            console.log(`${this.#greetings}, ${this.name}`);
      }
}

const obj = new Person("Bhartesh")
console.log(obj);

console.log(cart.find(ele => ele.quantity >= 2));

import 'core-js/stable';