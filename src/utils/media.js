export function media(notas) {
  if (notas.length === 0) {
    throw new Error('Não é possível calcular média de array vazio')
  }
  const soma = notas.reduce((acc, n) => acc + n, 0)
  return soma / notas.length
}