'use strict';


function calcAge(birthyear){
      const Age= 2023 - birthyear;
      console.log(firstName);

      function printAge()
      {
            const output= `${firstName}, your age is ${Age},born in ${birthyear}`;
            console.log(output);


            if(birthyear >- 1981 && birthyear <= 1996){
                  var millenial=true;
                  const str= `Oh, you are a millenial, ${firstName}`;

                  console.log(str);
            }
            console.log(millenial);
            // it can accessible because of var keyword which is a block scope 
            function add(a, b){
                  return (a +b) ;
            }
      }
      printAge();
      return Age;
}

const firstName  = 'Bhartesh';
calcAge(1998);