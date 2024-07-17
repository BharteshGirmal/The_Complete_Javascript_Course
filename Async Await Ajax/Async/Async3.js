

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
            // const [country1] = await getJSON(`https://restcountries.com/v2/name/${c1}/`);

            // const [country2] = await getJSON(`https://restcountries.com/v2/name/${c2}/`);

            // const [country3] = await getJSON(`https://restcountries.com/v2/name/${c3}/`);

            // console.log([country1.capital, country2.capital, country3.capital]);


            const data = await Promise.all([
                  getJSON(`https://restcountries.com/v2/name/${c1}/`), getJSON(`https://restcountries.com/v2/name/${c2}/`), getJSON(`https://restcountries.com/v2/name/${c3}/`)  
            ]);

            console.log(data.map((e)=> e[0].capital));

      }catch(err){
            console.log(err);
      }
}

get3Countries('india', 'usa', 'portugal');