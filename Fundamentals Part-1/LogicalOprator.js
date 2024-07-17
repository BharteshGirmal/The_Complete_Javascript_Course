console.log('Logical Oprator');

const hasDriverlicense=true;
const hasGoodVision=true;

console.log(hasDriverlicense && hasGoodVision);
console.log(hasDriverlicense || hasGoodVision);
console.log(!hasDriverlicense);
console.log(!hasGoodVision);


const shouldDrive= hasDriverlicense && hasGoodVision;

if(shouldDrive)
{
      console.log('License has been approved')
}
else
{
      console.log('Declined')
}

const isTired=false;

if(hasDriverlicense && hasGoodVision && !isTired)
{
      console.log('Person is able to drive')
}
else
{
      console.log('Someome else should drive')
}