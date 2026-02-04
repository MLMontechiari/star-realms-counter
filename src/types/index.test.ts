import { describe, it, expect } from 'vitest'
import { isCounterType, isButtonVariant, isPlayerCount, isValidPlayer } from '../types'

describe('Type Guards', () => {
  describe('isCounterType', () => {
    it('should validate counter types', () => {
      expect(isCounterType('authority')).toBe(true)
      expect(isCounterType('combat')).toBe(true)
      expect(isCounterType('trade')).toBe(true)
      expect(isCounterType('invalid')).toBe(false)
    })
  })

  describe('isButtonVariant', () => {
    it('should validate button variants', () => {
      expect(isButtonVariant('primary')).toBe(true)
      expect(isButtonVariant('secondary')).toBe(true)
      expect(isButtonVariant('player')).toBe(true)
      expect(isButtonVariant('invalid')).toBe(false)
    })
  })

  describe('isPlayerCount', () => {
    it('should validate player counts', () => {
      expect(isPlayerCount(1)).toBe(true)
      expect(isPlayerCount(2)).toBe(true)
      expect(isPlayerCount(3)).toBe(true)
      expect(isPlayerCount(4)).toBe(true)
      expect(isPlayerCount(0)).toBe(false)
      expect(isPlayerCount(5)).toBe(false)
    })
  })

  describe('isValidPlayer', () => {
    it('should validate player objects', () => {
      const validPlayer = { id: 1, name: 'Player 1', authority: 50, combat: 0, trade: 0 }
      expect(isValidPlayer(validPlayer)).toBe(true)
    })

    it('should reject invalid player objects', () => {
      expect(isValidPlayer(null)).toBe(false)
      expect(isValidPlayer({})).toBe(false)
      expect(isValidPlayer({ id: 1 })).toBe(false)
      expect(isValidPlayer({ id: '1', name: 'Test', authority: 50, combat: 0, trade: 0 })).toBe(false)
    })
  })
})
