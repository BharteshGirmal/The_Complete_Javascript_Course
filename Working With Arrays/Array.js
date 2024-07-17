
let arr =['a', 'b', 'c', 'd', 'e'];
// slice in array 

console.log('array after slicing ', arr);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// splice 

console.log('Splice ...');
console.log('Original Array :', arr);
console.log('After Splicing ');
console.log("splice(index) ", arr.splice(2)); // remove all elements from index to end and return them as an Array 
console.log('Original Array :', arr);
arr.splice(1);
console.log('Original Array :', arr);

console.log('Reversing Method');
console.log("original array ", arr) ;
arr.reverse(); // reverse the order of elements in an array
console.log(`reversed array `, arr);
console.log("original array ", arr) ;
arr =['a', 'b', 'c', 'd', 'e'];
const arr2= ['f', 'g', 'h', 'i', 'j'];
console.log('Concatation');
const letters= arr.concat(arr2);
console.log(`${letters}`);
console.log([...arr, ...arr2]);

console.log('Join Method');
console.log(letters.join(' - '));


const brr = [23, 11, 43];
console.log(brr[0]);
console.log(brr.at(0));

// getting last array element
console.log(brr[brr.length - 1]);
console.log(brr.splice(-1)[0]);
console.log(brr.at(-1));




