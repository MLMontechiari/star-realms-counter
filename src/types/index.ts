export type CounterType = 'authority' | 'combat' | 'trade'
export type ButtonVariant = 'primary' | 'secondary' | 'player'
export type PlayerCount = 1 | 2 | 3 | 4

export interface Player {
  readonly id: number
  name: string
  authority: number
  combat: number
  trade: number
}

// Type guards
export const isCounterType = (value: string): value is CounterType => {
  return ['authority', 'combat', 'trade'].includes(value)
}

export const isButtonVariant = (value: string): value is ButtonVariant => {
  return ['primary', 'secondary', 'player'].includes(value)
}

export const isPlayerCount = (value: number): value is PlayerCount => {
  return [1, 2, 3, 4].includes(value)
}

export const isValidPlayer = (player: unknown): player is Player => {
  if (typeof player !== 'object' || player === null) return false
  const p = player as Record<string, unknown>
  return (
    typeof p.id === 'number' &&
    typeof p.name === 'string' &&
    typeof p.authority === 'number' &&
    typeof p.combat === 'number' &&
    typeof p.trade === 'number'
  )
}
