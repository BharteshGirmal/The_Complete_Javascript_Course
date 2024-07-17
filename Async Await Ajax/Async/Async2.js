//  Consuming Promises with Async and Await 

console.log('Consuming Promises with Async and Await ');
const countriesContainer = document.querySelector('.countries');


const getCurrentPosition = function(){
      return new Promise((resolve, reject)=>{
        // navigator.geolocation.getCurrentPosition(
        //   position => resolve(position),
        //   error => reject(error)
        // )
        navigator.geolocation.getCurrentPosition(resolve, reject );
      })
    }


const whereiam = async function (country){

      // Geolocation
   try{   const pos = await getCurrentPosition();
      const {latitude, longitude} = pos.coords;
      
      // Reverse Geolocation
      const resGeo = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
      const dataGeo = resGeo.json();
      console.log(resGeo);

      if(!resGeo.ok) throw new Error(`Problem Getting Location Data `)


     const result =  await fetch(`https://restcountries.com/v2/name/${dataGeo.country}/`);

     const data = await result.json();
     console.log(data);
     renderCountry(data[0]);

     return `You are in ${dataGeo.city}, ${dataGeo.country}`
}catch(err){
      console.error(`${err.message} ⛔`);
}
 
}


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


// Returning the values from async await
whereiam();
console.log('First');

