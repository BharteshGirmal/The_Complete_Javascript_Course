'use strict';

// const btn = document.querySelector('.btn-country');

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// // Asynchronus 

// // https://countries-api-836d.onrender.com/countries/


// // Countries Details
// // 1. Using CMLHttpRequest


const renderCountry= function (response, className=''){
      const html = `<article class="country  ${className}">
      <img class="country__img" src="${response.flag}"/>
      <div class="country__data">
      <h3 class="country__name">${response.name}</h3>
      <h4 class="country__region">${response.region}</h4>
      <p class="country__row">🧑‍🤝‍🧑</span>${(+response.population / 100000).toFixed(2)} Peoples</p>
      <p class="country__row"><span>🗣️</span>${response.languages[0].name}</p>
      <p class="country__row">💲<span>${response.currencies[0].code}</span></p></div></article>`;



      countriesContainer.insertAdjacentHTML('beforeend', html);

      countriesContainer.style.opacity=1;
};


const renderError= function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity=1;
};
   



// const getCountryData= function(name){

//       // AJAX call 1
//       const request = new XMLHttpRequest();
//       request.open('GET', `https://restcountries.com/v2/name/${name}/`);

//       // https://restcountries.com/v2/name/india

//       request.send();
//       request.addEventListener('load', function(){
//       console.log('responseText  ',this.responseText);

//       const [response]= JSON.parse(this.responseText);

//       console.log(response);
//       renderCountry(response);

//       const neighbour = response.borders.cca2;
//       if(!neighbour) return;
      
//       // AJAX call 2
//       const req= new XMLHttpRequest();
//       const neighbourCodes = neighbour.join(',');
//       req.open('GET', `https://restcountries.com/v3.1/alpha?codes=${neighbour}`);



//       req.send();

//       req.addEventListener('load', function(){
//             console.log(this.responseText);
//             const [req]= JSON.parse(this.responseText);
//             console.log(req);
//             renderCountry(req, 'neighbour');
//       })
// });
// }


// getCountryData('usa');
// getCountryData('russia');
// getCountryData('argentina');


// Promises 

// const request = fetch(`https://restcountries.com/v2/name/portugal`);

// console.log(request);

// const renderCountry2 = function(response, className = '') {
//       const html = `<article class="country  ${className}">
//         <img class="country__img" src="${response.flag}"/>
//         <div class="country__data">
//           <h3 class="country__name">${response.name}</h3>
//           <h4 class="country__region">${response.region}</h4>
//           <p class="country__row">🧑‍🤝‍🧑</span>${(+response.population / 100000).toFixed(2)} Peoples</p>
//           <p class="country__row"><span>🗣️</span>${response.languages[0].name}</p>
//           <p class="country__row">💲<span>${response.currencies[0].code}</span></p>
//         </div>
//       </article>`;
    
//       countriesContainer.insertAdjacentHTML('beforeend', html);
//       countriesContainer.style.opacity = 1;
//     };
    
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((res) => {
    
//       res.json();
    
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];
//       if (!neighbor) return;

//       // country
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);


//     })
//     .then(response=>{
//       console.log(response);
     
//         response.json();

//     })
//     .then(data=>{
//       renderCountry(data, 'neighbour');
//     })
//     .catch((err) => {
//       console.error(`${err}  🐞🐞🪲🪲🐞🐞🐞`);
//       renderError(`Somethingn Went Wrong 🐞🐞🪲🪲🐞🐞🐞 ${err.message}. Try Again `);
//     }).finally(()=>{
//       countriesContainer.style.opacity=1;
//     })
// };


btn.addEventListener('click', function(){
  getCountryData('india');

});

// for error handling there are 2 ways 
// 1. passing callback function to then menthod

// .then(res=>{
//   console.log(res);
// }, err=>{
//   console.log(err);
// });
// 2. using catch function




const lotteryPromise = new Promise(function(resolve, reject){
  setTimeout(() => {
    if(Math.random() >= 0.5){
      resolve('You Win 💰');
    }else{
      reject('You Loose your Money 💰')
    }
  }, 3000);
})


lotteryPromise.then(res => console.log(res)).catch(err => console.log(err)); 



const wait =  second =>{
  return new Promise( (resolve)=>{
    setTimeout(resolve, second + 1000);
  })
}



wait(2).then(()=>{
  console.log('Waiting Time 2 Seconds');
  return wait(3);
}).then(()=>{
  console.log('Waiting Time 3 seconds')
})



// Promisifying the Geolocation API 

 
const getCurrentPosition = function(){
  return new Promise((resolve, reject)=>{
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   error => reject(error)
    // )
    navigator.geolocation.getCurrentPosition(resolve, reject );
  })
}

getCurrentPosition().then((res)=>{
  console.log(res) 
}).catch((err)=>{
  console.log(err);
});


const renderPosition = function (){
  getCurrentPosition().then(pos =>{
    console.log(pos.coords);

    const {latitude, longitude} = pos.coords;
    console.log(latitude, longitude);

    return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
  })
  .then((data)=>
              renderCountry(data[0]))
  .catch((error)=>{
        console.log(`${error.message}🐞`);
  })
}

renderPosition();