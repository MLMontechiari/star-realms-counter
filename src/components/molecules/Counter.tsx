import { Button } from '../atoms/Button'

interface CounterProps {
  label: string
  icon: string
  value: number
  onIncrement: (amount: number) => void
  onDecrement: (amount: number) => void
  type: 'authority' | 'combat' | 'trade'
  allowNegative?: boolean
}

export const Counter = ({ 
  label, 
  icon, 
  value, 
  onIncrement, 
  onDecrement, 
  type,
  allowNegative = false 
}: CounterProps) => {
  const handleDecrement = (amount: number) => {
    if (!allowNegative && value - amount < 0) return
    onDecrement(amount)
  }

  return (
    <div className={`counter ${type}`}>
      <div className="counter-header">
        <span className="icon">{icon}</span>
        <h3>{label}</h3>
      </div>
      <div className="counter-value">{value}</div>
      <div className="counter-controls">
        <Button onClick={() => handleDecrement(1)}>-1</Button>
        <Button onClick={() => handleDecrement(5)}>-5</Button>
        <Button onClick={() => onIncrement(1)}>+1</Button>
        <Button onClick={() => onIncrement(5)}>+5</Button>
      </div>
    </div>
  )
}