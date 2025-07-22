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

function getComputerChoice(min, max) {
  const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

  if (computerChoice == 1) {
    console.log("La compu eligió PIEDRA");
  } else if (computerChoice == 2) {
    console.log("La compu eligió PAPEL");
  } else {
    console.log("La compu eligió TIJERA");
  }

  return computerChoice;
}

getComputerChoice(1, 3);

computerChoice = getComputerChoice(1, 3);
