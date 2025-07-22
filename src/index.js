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

function getHumanChoice() {
  let userPrompt = prompt("Escribí: Piedra, papel o tijera...");
  let humanChoice = 0;

  if (userPrompt == "piedra".toLowerCase()) {
    console.log("Elegiste " + userPrompt + " 🪨");
    humanChoice = 1;
  } else if (userPrompt == "papel".toLowerCase()) {
    console.log("Elegiste " + userPrompt + " 📄");
    humanChoice = 2;
  } else if (userPrompt == "tijera".toLowerCase()) {
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

humanChoice = getHumanChoice();
computerChoice = getComputerChoice(1, 3);

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    // Empate
    console.log("Empate, ¡pelotudos!");
  } else if (humanChoice == 1 && computerChoice == 2) {
    // Piedra vs Papel
    console.log("¡Gana la máquina!");
  } else if (humanChoice == 1 && computerChoice == 3) {
    // Piedra vs Tijera
    console.log("¡Ganaste!");
  } else if (humanChoice == 2 && computerChoice == 1) {
    // Papel vs Piedra
    console.log("¡Ganaste!");
  } else if (humanChoice == 2 && computerChoice == 3) {
    // Papel vs Tijera
    console.log("¡Gana la máquina!");
  } else if (humanChoice == 3 && computerChoice == 1) {
    // Tijera vs Piedra
    console.log("¡Gana la máquina!");
  } else if (humanChoice == 3 && computerChoice == 2) {
    // Tijera vs Papel
    console.log("¡Ganaste!");
  }
}

playRound(humanChoice, computerChoice);


