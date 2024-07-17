const detailArray=[
      'Bhartesh',
      'Girmal',
      2023-1998,
      'techer',
      ['a','b', 'c']
]
console.log(detailArray);

const arrObj={
      firstName:'Bhartesh',
      lastName:'Girmal',
      age: 2023-1998,
      profession:'techer' ,
      friends:['a','b', 'c']
};
console.log(arrObj);
console.log(arrObj.firstName);

const nameKey='Name';
console.log(arrObj["first"+nameKey]);
console.log(arrObj["last"+nameKey]);

//const intrestedIn=prompt("What do you want to know ? choose between firstName, lastName, age, job, friends");

//console.log(arrObj[`${intrestedIn}`]);
//const res =arrObj[`${intrestedIn}`];

//alert(` you Selected ${intrestedIn} hence ${intrestedIn} is ${res}`);


const person={
      firstName:'Bhartesh',
      lastName:"Girmal",
      birthyear:1998,
      job:'Developer',
      friends:['Michael','Peter','Steven'],
      hasDriverlicense:true,
      calcAge:function (birthyear)
      {
            return 2023- birthyear;
      }
};

console.log(person);
//  using Dot property

console.log(person.calcAge(1998));
// or using bracket property
console.log(person["calcAge"](1998));
