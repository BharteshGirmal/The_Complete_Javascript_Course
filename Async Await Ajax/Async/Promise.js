
console.log('Test Start');

setTimeout(() => {
      console.log('0 sec Timer');
}, 0);

Promise.resolve(`Resolved promise 1`).then(res=>console.log(res))

Promise.resolve(`Resolved promise 2`).then(res=>{
     for(let i=0; i< 1000000000 ; i++){}
      console.log(res)
})


console.log('Test is going');