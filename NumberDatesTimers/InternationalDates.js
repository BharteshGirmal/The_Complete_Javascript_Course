

const now = new Date();

const  option={
      hour:'numeric',
      minute:'numeric',
      day:'numeric',
      month:'numeric',
      year:'numeric'
    };
const intDate= new Intl.DateTimeFormat('en-US').format(now);
const intDate2= new Intl.DateTimeFormat('en-GB').format(now);
const intDate3= new Intl.DateTimeFormat('en-UK').format(now);

console.log('en-US Date : ', intDate);
console.log('en-GB Date : ', intDate2);
console.log('en-UK Date : ', intDate3);

const intDate4= new Intl.DateTimeFormat('en-US', option).format(now);
const intDate5= new Intl.DateTimeFormat('en-GB', option).format(now);
const intDate6= new Intl.DateTimeFormat('en-UK', option).format(now);

console.log('en-GB Date : ', intDate4);
console.log('en-UK Date : ', intDate5);
console.log('en-US Date : ', intDate6);

const locale= navigator.language;
console.log(locale);

const num = 5678903.66;

const options={
  style:'currency',
  //unit:'mile-per-hour',
  currency:'EUR',
  useGrouping:false
}
console.log('US   :', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germeny   :', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria   :', new Intl.NumberFormat('sy-ry', options).format(num));

