console.log('Promise');
console.log('All, race, allSettled, any');


// Promise.all



const getJSON= function(url, errorMsg='Something went wrong'){
      return fetch(url).then(res=> {
            if(!res.ok){
                  throw new Error(`Error ${res.status}`)
            }

            return res.json();
      })
}


const get3Countries = async function(c1, c2, c3){
      try{
            const data = await Promise.all([
                  getJSON(`https://restcountries.com/v2/name/${c1}/`), getJSON(`https://restcountries.com/v2/name/${c2}/`), getJSON(`https://restcountries.com/v2/name/${c3}/`)  
            ]);

            console.log(data.map((e)=> e[0].capital));

      }catch(err){
            console.log(err);
      }
}

get3Countries('india', 'usa', 'portugal');

// Promise.race using async function 

(async function(){
      const data = await Promise.race([
            getJSON(`https://restcountries.com/v2/name/italy/`), getJSON(`https://restcountries.com/v2/name/egypt/`), getJSON(`https://restcountries.com/v2/name/mexico/`)  
      ]);

      console.log(data);
})();


const timeout = function(sec){
      return new Promise(function(_, reject){
            setTimeout(() => {
                  reject(new Error(`Request took too long!`));
            }, sec * 1000);
      })
};


Promise.race([
      getJSON(`https://restcountries.com/v2/name/tanzania/`),
      timeout(1)
]).then(res => console.log(res[0])).catch(err =>console.log(err));


// Promise AllSettled 

Promise.allSettled([
      Promise.resolve('Success'),
      Promise.reject('Error'),
      Promise.resolve('Anathor Success'),
]).then(res=>console.log(res));


// Promise Any 
Promise.any([
      Promise.resolve('Success'),
      Promise.reject('Error'),
      Promise.resolve('Anathor Success'),
]).then(res=>console.log(res));

