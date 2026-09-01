/**
 * 4. Usen el método `arr.splice()` para eliminar uno de los dos números duplicados en el array dado.
 */

const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea
arr.splice(5,1);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
