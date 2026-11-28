// ***** let and const replace var ******** //

const playerName = "Caleb";
const introduction = "Hi. I am Caleb Bathurst. A web designer and developer."
let score = 0;
score = 1;

// ***** Arrrow Functions ******** //

//old
//const double = function (n) { return n * 2};
//new
const double = (n) => n * 2;

// one argument, no brackets needed; one expression, no return needed.
const greet = name => `Hello, ${name}`;

// ***** Template Literals ******** //
const total = 5;
const message = `You scored ${score} out of ${total}.`;

console.log(message);