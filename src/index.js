/* PSEUDOCÓDIGO PIEDRA PAPEL TIJERA

1. La máquina elige un número entre 1 y 3 (random)
2. Si el número es 1 → piedra, 2 → papel, 3 → tijera
3. Mostrar en consola qué eligió la máquina

4. Pedir al usuario que ingrese un número entre 1 y 3 (prompt)
5. Si el número es 1 → piedra, 2 → papel, 3 → tijera
6. Mostrar en consola qué eligió el usuario

7. Comparar la elección del usuario y la de la máquina
    - Si es empate → decir "empate"
    - Si gana el humano → sumar punto a humano
    - Si gana la máquina → sumar punto a máquina
8. Mostrar en consola quién ganó la ronda

*/

humanScore = 0;
computerScore = 0;
const MAX_TURNOS = 5;

function getHumanChoice() {
  let userPrompt = prompt("Escribí: Piedra, papel o tijera...").toLowerCase();
  let humanChoice = 0;

  if (userPrompt == "piedra") {
    console.log("Elegiste " + userPrompt + " 🪨");
    humanChoice = 1;
  } else if (userPrompt == "papel") {
    console.log("Elegiste " + userPrompt + " 📄");
    humanChoice = 2;
  } else if (userPrompt == "tijera") {
    console.log("Elegiste " + userPrompt + " ✂️");
    humanChoice = 3;
  }

  return humanChoice;
}

function getComputerChoice(min, max) {
  const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

  if (computerChoice == 1) {
    console.log("La compu eligió 🪨 ");
  } else if (computerChoice == 2) {
    console.log("La compu eligió 📄");
  } else {
    console.log("La compu eligió ✂️");
  }

  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    // Empate
    console.log("¡Empate!");
  } else if (humanChoice == 1 && computerChoice == 2) {
    // Piedra vs Papel
    console.log("¡Gana la máquina!");
    return computerScore++;
  } else if (humanChoice == 1 && computerChoice == 3) {
    // Piedra vs Tijera
    console.log("¡Ganaste!");
    return humanScore++;
  } else if (humanChoice == 2 && computerChoice == 1) {
    // Papel vs Piedra
    console.log("¡Ganaste!");
    return humanScore++;
  } else if (humanChoice == 2 && computerChoice == 3) {
    // Papel vs Tijera
    console.log("¡Gana la máquina!");
    return computerScore++;
  } else if (humanChoice == 3 && computerChoice == 1) {
    // Tijera vs Piedra
    console.log("¡Gana la máquina!");
    return computerScore++;
  } else if (humanChoice == 3 && computerChoice == 2) {
    // Tijera vs Papel
    console.log("¡Ganaste!");
    return humanScore++;
  }
}

function playGame() {
  for (let i = 1; i <= MAX_TURNOS; i++) {
    console.log("TURNO:", i);
    let human = getHumanChoice();
    let computer = getComputerChoice(1, 3);
    playRound(human, computer);
    console.log("------------------------");
  }
}

playGame();
console.log("PUNTAJES: ");
console.log("Puntaje jugador: " + humanScore);
console.log("Puntaje máquina: " + computerScore);
console.log("------------------------");

if (humanScore > computerScore) {
  console.log("¡Ganaste la partida contra la compu!");
} else if (computerScore > humanScore) {
  console.log("La máquina te ganó esta vez, ¡volvé a intentar!");
} else {
  console.log("Empataron.");
}
