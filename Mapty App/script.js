'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


let map, mapEvent;

// passing this variable as a private variable 
// Project Architechture 

class Workout{
      // defining the class variables 
      date = new Date();
      id =(Date.now() + '').slice(-10);
      clicks=0;
      // creating a id taking last 10 digits
      constructor(cordinates, distance, duratiom)
      {
            this.cordinates=cordinates;
            this.distance=distance;
            this.duratiom=duratiom;
            this._setDescription();
           
      }

      _setDescription(){
            const Months=["January", 'February', 'March', 'April', 'May','Jun','July', 'August', 'September', 'October',"November", 'December'];

            this.description=`${this.type} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
      }

      click(){
            this.clicks++;
      }
}

class Running extends Workout {
      type="running";

      constructor(cordinates, distance, duratiom, cadence)
      {
            super(cordinates, distance, duratiom);
            this.cadence=cadence;
            this.calcPace();
            this._setDescription();
      }

      calcPace(){
            this.pace = this.duratiom / this.cadence;
            return this.pace;
      }
}
class Cycling extends Workout {
      type="cycling";

      constructor(cordinates, distance, duratiom, elevation)
      {
            super(cordinates, distance, duratiom);
            this.elevation=elevation;
            this.calcSpeed();
            this._setDescription();

      }

      calcSpeed(){
            this.speed = this.distance / (this.duratiom/ 60) ;
            return this.speed;
      }
}



//<<<<<<<<<<<<<<<  Application Architechture >>>>>>>>>>>>>>>
class App{

      #map;
      #mapEvent;
      #workouts=[];


      constructor(){
            this.#workouts
            this._getPosition();

            this._getLocalStorage();


            form.addEventListener('submit',this._newWorkout.bind(this));
            // change the fileds based on the select condition
            inputType.addEventListener('change', this._toggleNavigationField);
            containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

      }

      _getPosition(){
            if(navigator.geolocation)
            {
                  navigator.geolocation.getCurrentPosition(
                        this._loadMap.bind(this), 
                        function(){
                        console.log('Error!!!');
                  }
                  );
            }

              
      }

      _loadMap(position){
                  console.log('Success!!!');
                  const {latitude} = position.coords;
                  const {longitude} = position.coords;
                  console.log('Latitude  : '+latitude);
                  console.log('Longitude  : '+longitude);
                  console.log(`https://www.google.com/maps/@${latitude},${longitude}/data=!5m1!1e1?authuser=0&entry=ttu`);
            
            
                  const coards= [latitude, longitude];
                  // 20 --> is the zoom level of map
                  //('')=> html div id to display map
                  this.#map = L.map('map').setView(coards, 16);
            
                  // L -s is a namespace for the leaflet 
                  // https://tile.openstreetmap.org/{z}/{x}/{y}.png
                        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(this.#map);
            

                  this.#map.on('click', this._showForm.bind(this));   

                  this.#workouts.forEach(work =>{
                        this._renderWorkoutMarker(work); 
                  })
      }


      _showForm(mapE){
            this.#mapEvent= mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
      }

      _hideForm(){
            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value ="";

            form.style.display="none";
            form.classList.add("hidden");

            setTimeout(() => {
                  form.style.display='grid';
            }, 1000);
      }

      

      _newWorkout(e){

            const validInputs = (...inputs)=>
            inputs.every(inp => Number.isFinite(inp));

            const allPositive = (...inputs)=> inputs.every(inp=> inp > 0);

            const {lat,lng}= this.#mapEvent.latlng;

            e.preventDefault();
            // to prevent from default submission
      
            // 1. clear the fields


                 // Get the data from the from

            const type = inputType.value;
            const distance = +inputDistance.value;
            const duration = +inputDuration.value;
            let workout;

            if(type === 'running')
            {
                  const cadence= +inputCadence.value;
                  // Check if data is valid
                  if(
                        // !Number.isFinite(distance) ||
                        // !Number.isFinite(duration)  ||
                        // !Number.isFinite(cadence)  

                        !validInputs(distance, duration, cadence) ||
                        !allPositive(distance, duration, cadence)
                        
                        ) return alert(`input must be Positive Numbers`);
                        
                        // If workout runing create running object 
                        
                        workout = new Running([lat, lng],distance, duration, cadence);

            }
            if(type === 'cycling')
            {
                  const elevation = inputElevation.value;
                  
                  if(
                        !validInputs(distance, duration) ||
                        !allPositive(distance, duration)
                        ){
                              return alert(`input must be Positive Numbers`);
                        }
                        
                        // If workout cycling create running cycling
            
                        workout = new Cycling([lat, lng],distance, duration, elevation);
                  
            }

            // add new object to workout array
            this.#workouts.push(workout);
            this._renderWorkoutMarker(workout);
            
            // Render workout on map msrker
            this._renderWorkout(workout);
            this._hideForm();
            // set local storage to all workouts
            this._setLocalStorage();
            
      }
      
      _renderWorkoutMarker(workout){

            L.marker(workout.cordinates).addTo(this.#map)
            .bindPopup(L.popup({
                  minWidth:100,
                  maxWdith:250,
                  autoClose: false,
                  closeOnClick:false,
                  className:`${workout.type}-popup`,
            }))
            .setPopupContent(`${workout.type=== 'running'? '🏃‍♂️':'🚴‍♀️'} ${workout.description}`)
            .openPopup();
      }

      _toggleElevationFields(){

               // toggling the div on select value
               inputElevation.closest('.form__row').classList.toggle('form__row--hidden');

               inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
      }


      _renderWorkout(workout){

            let  html =`
            <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                  <span class="workout__icon">${workout.type === 'running' ?'🏃‍♂️':'🚴‍♀️'} </span>
                  <span class="workout__value">${workout.distance}</span>
                  <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                  <span class="workout__icon">⏱</span>
                  <span class="workout__value">${workout.duratiom}</span>
                  <span class="workout__unit">min</span>
            </div>
          `;

          if(workout.type ==='running')
          {
                  html+=`
                  <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
                  `;
          }
          if(workout.type ==='cycling')
          {
            html +=`
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;

          }


          form.insertAdjacentHTML('afterend', html);
      }

 
      _moveToPopup(e){
            const workoutEl = e.target.closest('.workout');
            console.log(workoutEl);
            if(!workoutEl) return;

            const workout = this.#workouts.find(work =>
                  work.id === workoutEl.dataset.id);

            this.#map.setView(workout.coards, 19, {
                  animate:true,
                  pan:{
                        duration:1,
                  }
            })
            workout.click();
      }

      _setLocalStorage(){
            localStorage.setItem('workouts',JSON.stringify(this.#workouts) );
            console.log('Local Storage : ' +localStorage.getItem('workouts') );
      }

      _getLocalStorage(){
            const data = JSON.parse(localStorage.getItem('workouts'));

            console.log(data);
            if(!data) return;

            this.#workouts = data;

            this.#workouts.forEach(work =>{
                  this._renderWorkout(work); 
            })
      }

      reset(){
            localStorage.removeItem('workouts');
            location.reload();
      }

}

const app = new App();

// app._getPosition();
// call this method when class loads i.e. using constuctor function







// navigator.geolocation.getCurrentPosition(function(position){
//       console.log('Success!!!');
//       const {latitude} = position.coords;
//       const {longitude} = position.coords;
//       console.log('Latitude  : '+latitude);
//       console.log('Longitude  : '+longitude);
//       console.log(`https://www.google.com/maps/@${latitude},${longitude}/data=!5m1!1e1?authuser=0&entry=ttu`);


//       const coards= [latitude, longitude];
//       // 20 --> is the zoom level of map
//       //('')=> html div id to display map
//       map = L.map('map').setView(coards, 16);

//       // L -s is a namespace for the leaflet 
//       // https://tile.openstreetmap.org/{z}/{x}/{y}.png
//             L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             }).addTo(map);



//       map.on('click', function(mapE){
//             mapEvent= mapE;
//             form.classList.remove('hidden');
//             inputDistance.focus();
                  
//       });


// }, function(){
//       console.log('Error!!!');
// });

// form.addEventListener('submit', function(e){
//             e.preventDefault();
//             // to prevent from default submission

//             // 1. clear the fields

//             inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value ="";
//             console.log(mapEvent);
//             const {lat,lng}= mapEvent.latlng;
//             L.marker([lat,lng]).addTo(map)
//             .bindPopup(L.popup({
//                   minWidth:100,
//                   maxWdith:250,
//                   autoClose: false,
//                   closeOnClick:false,
//                   className:"running-popup",
//             }))
//             .setPopupContent('Workout')
//             .openPopup();


// });

// // change the fileds based on the select condition

// inputType.addEventListener('change', function(){

//       // toggling the div on select value
//       inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//       inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });
