import { users } from "./data.js";

export function getUserById(id) {
  // Busca el usuario por ID
  const user = users.find(user => user.id === id);
  
  // Si no se encuentra el usuario, lanza un error
  if (!user) {
    throw new Error(`No encontramos usuarios con el id ${id}`);
  }
  
  return user;
}
