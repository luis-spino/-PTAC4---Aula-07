import { describe, it, expect } from 'vitest'
import { media } from './media'

describe('media', () => {
  it('devolve 8 para [7, 8, 9]', () => {
    expect(media([7, 8, 9])).toBe(8)
  })

  it('lança erro para array vazio', () => {
    expect(() => media([])).toThrow()
  })
})