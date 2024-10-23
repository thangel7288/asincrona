import { getUserById } from "./modulo.js";

try {
  let user = getUserById(100); // Cambia el ID a uno que no exista para probar el error
  console.log(user);
} catch (error) {
  console.error(error.message); // Imprime el mensaje de error en la consola
}

