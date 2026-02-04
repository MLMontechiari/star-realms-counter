import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

export const Modal = ({ isOpen, title, message, onConfirm, onCancel }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <Button variant="secondary" onClick={onCancel}>Cancelar</Button>
          <Button variant="primary" onClick={onConfirm}>Confirmar</Button>
        </div>
      </div>
    </div>
  )
}