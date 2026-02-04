interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export const Input = ({ value, onChange, placeholder, className = '' }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  )
}