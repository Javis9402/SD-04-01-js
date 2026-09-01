/**
 * 3. Usen el método `arr.splice()` para insertar el número faltante en el array dado en la posición correcta.
 */

const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Escribe tu codigo por debajo de esta linea
arr.splice(7,0,8);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// console.log(arr[7]);
// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
