/**
 * Function that given a row and a column, returns all the possible paths to reach the bottom right corner
 * @param row - Number of rows
 * @param column - Number of columns
 * @param matrix - Matrix with the values of each cell
 * @returns - All the possible paths to reach the bottom right corner
 */
export function getPaths(
  row: number,
  column: number,
  matrix: number[][],
): number[][] | undefined {
  // si la fila o la columna son mayores que la longitud de la matriz, devolver undefined
  // Si la fila o la columna están fuera de rango, devolver undefined
  if (row != matrix.length) {
    return undefined;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (column != matrix[i].length) {
      return undefined;
    }
  }

  // Si la matriz es de 1x1 devolver el valor de esa casilla
  if (matrix.length === 1 && matrix[0].length === 1) {
    return [[matrix[row][column]]];
  }

  let paths: number[][] = [];

  function backtrack(i: number, j: number, path: number[]) {
    // Agregar el valor actual al camino
    path.push(matrix[i][j]);

    // Si llegamos a la esquina inferior derecha, almacenamos el camino
    if (i === matrix.length - 1 && j === matrix[0].length - 1) {
      paths.push([...path]); // con ...path se crea una copia del array path y se agrega a paths
    } else {
      // Explorar derecha y abajo
      if (j + 1 < matrix[0].length) backtrack(i, j + 1, path); // Derecha
      if (i + 1 < matrix.length) backtrack(i + 1, j, path); // Abajo
    }

    // Backtracking: eliminar el último elemento antes de regresar
    path.pop();
  }

  backtrack(0, 0, []);

  return paths;
}

// console.log(
//   getPaths(3, 2, [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ]),
// );
