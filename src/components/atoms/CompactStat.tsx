import type { CounterType } from '../../types'

interface CompactStatProps {
  readonly icon: string
  readonly value: number
  readonly type: Extract<CounterType, 'combat' | 'trade'>
  readonly onIncrement: () => void
  readonly onDecrement: () => void
}

export const CompactStat = ({ icon, value, type, onIncrement, onDecrement }: CompactStatProps) => {
  return (
    <div className={`stat-compact ${type}`}>
      <span className="icon">{icon}</span>
      <span className="value">{value}</span>
      <div className="controls">
        <button className="btn-mini" onClick={onIncrement}>+</button>
        <button className="btn-mini" onClick={onDecrement}>-</button>
      </div>
    </div>
  )
}
