// =====================================CODING NINJA===================================//

// -----------working of js -----------------//
// var userName = "divya";
// var userAge = 25;

// console.log(`username : ${userName}`);
// console.log(`userAge : ${userAge}`);

// function greetUser(name){
//     var greet = " i hope you are learning";
//     console.log(`hello ${name}, ${greet}`);
//     var currYear = 2030;
//     const year = currYear - userAge;
//     return `your birth year is : ${year}`;
// }

// const birthYear = greetUser(userName);
// console.log(birthYear);



// =================================OOPS===============================================//
const movie = {
    title: 'The Avengers',
    year: 2012,
    genre: 'Action, Sci-Fi, Thriller',
    cast: {
      main_lead: 'Robert Downey Jr.',
      others: 'Chris Evans',
    },
  
    getDetails() {
      console.log(`
        Title: ${this.title}
        Year: ${this.year}
        Genre: ${this.genre}
        Cast: ${this.cast}
        `);
    },
  
    getMovieDetails: function (detail) {
      console.log(movie[detail]);
    }
  };
  
  console.log(movie.title);
  movie.getDetails();
  const detail = 'year';
  
  movie.getMovieDetails(detail);
  
  console.log(movie.cast.main_lead);
//   -------------------------------------------//

// const movie1 = {
//     title: 'The Avengers',
//     year: 2012,
//     genre: 'Action, Sci-Fi, Thriller',
//     cast: {
//       main_lead: 'Robert Downey Jr.',
//       others: 'Chris Evans',
//     },
  
//     getDetails() {
//       console.log(`
//         Title: ${this.title}
//         Year: ${this.year}
//         Genre: ${this.genre}
//         Cast: ${this.cast}
//         `);
//     },
//   };
//   movie1.getDetails();
  
//   const movie2 = {
//     title: 'Movie2',
//     year: 2018,
//     genre: 'Action, Sci-Fi, Thriller',
//     cast: {
//       main_lead: 'Robert Downey Jr.',
//       others: 'Chris Evans',
//     },
  
//     getDetails() {
//       console.log(`
//           Title: ${this.title}
//           Year: ${this.year}
//           Genre: ${this.genre}
//           Cast: ${this.cast}
//           `);
//     },
//   };
//   movie2.getDetails();
// -----------------------------------------//
// function movie(title, year) {
//     const movieObj = {
//       title: title,
//       year: year,
//       getDetails() {
//         console.log(`
//                     Title: ${this.title}
//                     Year: ${this.year}
//                     `);
//       },
//     };
//     return movieObj;
//   }
  
//   const movie1 = movie('The Avengers', 2012);
//   console.log(movie1);
//   movie1.getDetails();
  
//   //Constructor Function
  
//   function Movie(title, year) {
//     this.title = title;
//     this.year = year;
  
//     this.getDetails = function () {
//       console.log(`
//                     Title: ${this.title}
//                     Year: ${this.year}
//                     `);
//     };
//   }
  
//   //new keyword
  
//   const movie2 = new Movie('Avatar', 2013);
//   console.log(movie2);
//   movie2.getDetails();
// ------------------------------------------//

// function Movie(title) {
//     this.title = title;
//     //   this.getDetails = function () {
//     //     console.log(`Title: ${this.title}`);
//     //   };
//   }
  
//   Movie.prototype.getDetails = function () {
//     console.log(`Title: ${this.title}`);
//   };
  
//   Movie.prototype.year = 2012;
  
//   const movie1 = new Movie('The Avengers');
  
//   movie1.year = 2012;
//   console.log(movie1);
//   console.log(movie1.__proto__);
  
//   const movie2 = new Movie('Avatar');
//   console.log(movie2);
//   console.log(movie2.__proto__.__proto__.__proto__);

//   -----------------------------------------//
// const inputs = [1, 2, 3, 4, 5];
// console.log(inputs.__proto__.__proto__);

// const car = {
//     getDetails(name) {
//       console.log(`Your car is ${name}`);
//     },
//   };
  
//   const car1 = Object.create(car);
//   console.log(car1.__proto__);
//   car1.getDetails('Audi');
  
//   //Object.assign

// ------------------------------------------//
// -------call, apply , bind---------//
// const car = {
//     name: 'car',
//     color: 'black',
//     getDetails(brand, seats) {
//       console.log(
//         `
//         This is a ${this.color} ${this.name} of ${brand} company.
//         It has ${seats} seats`
//       );
//     },
//   };
  
//   const bus = {
//     name: 'bus',
//     color: 'blue',
//   };
  
//   car.getDetails('Audi', 5);
  
//   car.getDetails.call(bus, 'Star', 50);
//   car.getDetails.apply(bus, ['Gold', 30]);
  
//   const veh1 = car.getDetails.bind(bus);
//   veh1('silver', 20);
//   veh1('bronze', 45);
  
// ----------------------------------------------//
  






// Define a constructor function
// function Car(make, model) {
//     // Attributes
//     this.make = make;
//     this.model = model;
// }

// // Method added to the prototype
// Car.prototype.startEngine = function() {
//     console.log("Engine started!");
// };

// // Create objects
// const car1 = new Car("Toyota", "Camry");
// const car2 = new Car("Honda", "Civic");

// car1.startEngine();
// car2.startEngine();

