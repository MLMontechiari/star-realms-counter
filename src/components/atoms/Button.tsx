interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'player'
  active?: boolean
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