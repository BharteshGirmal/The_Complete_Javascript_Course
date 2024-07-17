

const airLine='TAP air INDIA';
const plane='A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('8737'[0]);
console.log(airLine.length);
console.log('8737'.length);

console.log('Type Of ');
console.log(plane.indexOf('3'));

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));

console.log('________________ Slice Method ________________');
// 'TAP air INDIA'
console.log(airLine.slice(4));
console.log(airLine); // Immuttable 
console.log(airLine.slice(4, 7));
console.log(airLine.slice(-1, 7));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ')+1));
console.log(airLine.slice(-2));
console.log(airLine.slice(1, -2));

const checkMiddleSeat = function(seat){

      const s = seat.slice(-1);
      if (s === 'B' || s === 'E'){
            console.log('This is a Midddle Seat');
            }else{
                  console.log('Not a Middle Seat');      
            }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');



