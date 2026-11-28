// ***** let and const replace var ******** //

const playerName = "Caleb";
const introduction = "Hi. I am Caleb Bathurst. A web designer and developer."
let score = 0;
score = 1;

// ***** Arrow Functions ******** //

//old
//const double = function (n) { return n * 2};
//new
const double = (n) => n * 2;

// one argument, no brackets needed; one expression, no return needed.
const greet = name => `Hello, ${name}`;

// ***** Template Literals ******** //
const total = 5;
const message = `You scored ${score} out of ${total}.`;

// ***** Destructuring ******** //
const player = { name: "Caleb", score: 3 };
const { name, score: playerScore } = player;        // name === "Caleb", playerScore === 3

const choices = ["rock", "paper", "scissors"];
const [first, second] = choices;    // first === "rock"

// ***** Spread & Rest ******** //
// ***** IE: Spread copies or combines. Rest gathers leftovers into
//       an array. ******** //

const more = [...choices, "lizard"]; // a new array
const updated = { ...player, score: 4 }; // a new object, score changed
function sum(...numbers) {return numbers.reduce((a, b) => a + b, 0); }

console.log(updated);