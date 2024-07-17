let age=11;
let oldAge=age;

age=31;
console.log(age);
console.log(oldAge);

const me={
      name:"Bhartesh",
      age:33,
}


// Primitive Types 
const friend= me;
friend.age=23;
console.log('Friend: ',friend);
console.log('Me: ',me);



let lastname = 'Bhartesh';
let oldLastName=lastname;
// assigning the lastname to,the oldLastName 
lastname='Raju' ;  // reassigning the value of last name from Bhartesh to Raju
console.log(lastname, oldLastName);

// by using objects Referemce type

const Obj={
      firstName:'ABCD',
      lastname:'Williams',
      age:27
};

const ismarried=Obj;
ismarried.lastname="XYZ";   /// changing the firstname in object
console.log('Before Marraige : ', Obj);
console.log('After Marraige : ', ismarried);
// both will same as we assigned the value as XYZ

// COpying the Object
const Obj2={
      firstName:'ABCD',
      lastname:'Williams',
      age:27
};

const ObjCopy= Object.assign({}, Obj2);
/// copying all properties and values into new object
ObjCopy.firstName='ABCDE';    ////changing the property inside copied object
console.log("Object Copy:",ObjCopy);
console.log("Original Object:",Obj2);



