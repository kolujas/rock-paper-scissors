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

let humanScore = 0,
  computerScore = 0;

const MAX_TURNOS = 5;
let turnoActual = 1;

const botones = document.querySelectorAll(".btn");
const elecciones = document.querySelector("#resultados div");
const resultados = document.querySelector("#resultado-final");

const acciones = ["piedra 🪨", "papel 📄", "tijera ✂️"];

botones.forEach((element) => {
  element.addEventListener("click", (e) => {
    const accion = e.target.textContent.trim().toLowerCase();

    if (!comprobarTurno()) return true;

    crearElemento("h5", "TURNO ACTUAL: " + turnoActual);

    const humanChoice = realizarAccion(accion);
    checkTurn(humanChoice);

    // chequearFinDelJuego();
  });
});

function checkTurn(humanChoice) {
  let computerChoice = getComputerChoice();
  const resultadoRonda = playRound(humanChoice, computerChoice);
  crearElemento("p", resultadoRonda);

  if (turnoActual === MAX_TURNOS) {
    showResults();
  }
  turnoActual++;
}

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  const cpuChoice = acciones[index];
  crearElemento("p", `La máquina eligió ${cpuChoice}`);
  return index + 1;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "¡Empate!";
  }
  if (
    (humanChoice === 1 && computerChoice === 3) || // piedra gana a tijera
    (humanChoice === 2 && computerChoice === 1) || // papel gana a piedra
    (humanChoice === 3 && computerChoice === 2) // tijera gana a papel
  ) {
    humanScore++;
    return "¡Ganaste!";
  } else {
    computerScore++;
    return "¡Gana la máquina!";
  }
}
function showResults() {
  crearElemento("p", "------------------");
  crearElemento("p", "Resultados: ");

  crearElemento("p", "Puntaje jugador: " + humanScore);
  crearElemento("p", "Puntaje máquina: " + computerScore);

  if (humanScore > computerScore) {
    crearElemento("p", "¡Ganaste la partida contra la compu!");
  } else if (computerScore > humanScore) {
    crearElemento("p", "La máquina te ganó esta vez, ¡volvé a intentar!");
  } else {
    crearElemento("p", "¡Empataron!");
  }
}

function realizarAccion(nombreAccion) {
  crearElemento("p", `Elegiste ${nombreAccion}`);

  if (nombreAccion.includes("piedra")) return 1;
  if (nombreAccion.includes("papel")) return 2;
  if (nombreAccion.includes("tijera")) return 3;
}

function comprobarTurno() {
  if (turnoActual > MAX_TURNOS) {
    botones.forEach((btn) => (btn.disabled = true));
    return false;
  }

  return true;
}

function crearElemento(elemento, texto) {
  const elementoCreado = document.createElement(elemento);
  elementoCreado.textContent = texto;
  elecciones.append(elementoCreado);
}
