
// Opciones
var rock = "piedra";
var paper = "papel";
var scissors = "tijera";
var cpuOptions = [rock, paper, scissors];


// MODIFICA EL DATO CON LA VARIABLES INICIALES 
var userPick = rock;


// Lista de mensajes
var message;
var winMessages = ["win", "you win", "ganaste", "gg", "GG!", "nice", "good", "has derrotado a la máquina", "ganaste O:"];
var loseMessages = ["you lose", "gg'nt", "loseeer", "nice try, but you loce", "has perdido", "perdiste", "perdiste xD", "te ganaron"];
var tieMessages = ["empate", "nadie gana", "tie", "iguales", "empate, que aburrido"];

// Función radomizar array (https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html)
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

// La CPU escoge aleatoriamente una opción
shuffle(cpuOptions);
var cpuPick = cpuOptions[1];


// EMPIEZA EL JUEGO -----------------------------------------

// Cuando sean diferentes
if ( userPick != cpuPick ) {
  // Todos los casos en los que pierdes
  if ( ( userPick == rock && cpuPick == paper ) ||
      ( userPick == paper && cpuPick == rock ) ||
      ( userPick == scissors && cpuPick == paper ) ) {

    shuffle(loseMessages);
    message = loseMessages[1];

  } else { // Cuando ganas
    shuffle(winMessages);
    message = winMessages[1];

  }
} else { // Cuando es empate
  shuffle(tieMessages);
  message = tieMessages[1];
}

console.log("CPU: " + cpuPick)
console.log(message);