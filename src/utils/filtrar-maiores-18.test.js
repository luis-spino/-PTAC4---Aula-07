import { describe, it, expect } from 'vitest'
import { filtrarMaiores18 } from './filtrar-maiores-18'

describe('filtrarMaiores18', () => {
  const usuarios = [
    { name: 'Ana', age: 22 },
    { name: 'Beto', age: 17 },
    { name: 'Carla', age: 30 },
    { name: 'Duda', age: 18 },
  ]

  it('mantém Ana e Carla (22 e 30)', () => {
    const resultado = filtrarMaiores18(usuarios)
    expect(resultado).toContainEqual({ name: 'Ana', age: 22 })
    expect(resultado).toContainEqual({ name: 'Carla', age: 30 })
  })

  it('exclui Beto (17)', () => {
    const resultado = filtrarMaiores18(usuarios)
    expect(resultado).not.toContainEqual({ name: 'Beto', age: 17 })
  })

  it('inclui quem tem exatamente 18 (boundary)', () => {
    const resultado = filtrarMaiores18(usuarios)
    expect(resultado).toContainEqual({ name: 'Duda', age: 18 })
  })
})