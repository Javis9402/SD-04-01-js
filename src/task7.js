/**
 * 7. Una matriz es un array de arrays, que representa una cuadrícula con filas y columnas.  
   Usen esta tarea para experimentar con matrices:
   * ¿Pueden agregar un solo número a una fila existente?
   * ¿Pueden agregar una fila completa de números?
   * ¿Pueden eliminar un solo número de una fila específica?
   * ¿Pueden invertir una de las filas sin afectar a las demás?
 */

const arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
]

//* ¿Pueden agregar un solo número a una fila existente?
arr[0].push(10.1);

//* ¿Pueden agregar una fila completa de números?
arr.push([30,31,32,33,34,35,36,37,38,39]);  //Nota: Si se quiere agregar como arreglo se tiene que grupar [] o se agregan como elementos separados

//* ¿Pueden eliminar un solo número de una fila específica?
arr[0].splice(0,1);

//* ¿Pueden invertir una de las filas sin afectar a las demás?
arr[3].reverse(); //Se tiene que especificar que fila que debe cambiar o cambiara todo el arreglo

// Ver cambios
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/**Notas:
 ** Fundamento de funcionamiento
 * Igual al buscar un elementos especifico se debe especificar la fila y luego la columna o posicion dentro de esa fila
 * console.log(arr[0][0]);
 * Al tener una estructura tipo matriz o bidimencional debo elegir primero la fila
 * IA: Si quieres modificar los números individuales, primero debes "entrar" a la fila y luego aplicar el método
 * */