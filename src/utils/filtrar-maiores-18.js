export function filtrarMaiores18(usuarios) {
  return usuarios.filter((u) => u.age >= 18)
}