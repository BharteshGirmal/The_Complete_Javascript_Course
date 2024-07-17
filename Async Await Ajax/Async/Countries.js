'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Asynchronus 

// https://countries-api-836d.onrender.com/countries/


// Countries Details
// 1. Using CMLHttpRequest


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
}



const getCountryData= function(name){

      // AJAX call 1
      const request = new XMLHttpRequest();
      request.open('GET', `https://restcountries.com/v2/name/${name}/`);

      // https://restcountries.com/v2/name/india

      request.send();
      request.addEventListener('load', function(){
      console.log('responseText  ',this.responseText);

      const [response]= JSON.parse(this.responseText);

      console.log(response);
      renderCountry(response);

      const neighbour = response.borders.cca2;
      if(!neighbour) return;
      
      // AJAX call 2
      const req= new XMLHttpRequest();
      const neighbourCodes = neighbour.join(',');
      req.open('GET', `https://restcountries.com/v3.1/alpha?codes=${neighbour}`);



      req.send();

      req.addEventListener('load', function(){
            console.log(this.responseText);
            const [req]= JSON.parse(this.responseText);
            console.log(req);
            renderCountry(req, 'neighbour');
      })
});
}


getCountryData('usa');
// getCountryData('russia');
// getCountryData('argentina');