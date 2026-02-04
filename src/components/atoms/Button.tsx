import type { ButtonVariant } from '../../types'

interface ButtonProps {
  readonly onClick: () => void
  readonly children: React.ReactNode
  readonly variant?: ButtonVariant
  readonly active?: boolean
}

export const Button = ({ onClick, children, variant = 'secondary', active = false }: ButtonProps) => {
  const getClassName = () => {
    const base = 'btn'
    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary', 
      player: `btn-player ${active ? 'active' : ''}`
    }
    return `${base} ${variants[variant]}`
  }

  return (
    <button className={getClassName()} onClick={onClick}>
      {children}
    </button>
  )
}