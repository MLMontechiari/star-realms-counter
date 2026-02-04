import { useState } from 'react'
import { Button } from './Button'
import { Modal } from './Modal'

interface ConfirmButtonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'player'
  confirmTitle: string
  confirmMessage: string
}

export const ConfirmButton = ({ onClick, children, variant = 'secondary', confirmTitle, confirmMessage }: ConfirmButtonProps) => {
  const [showModal, setShowModal] = useState(false)

  const handleConfirm = () => {
    onClick()
    setShowModal(false)
  }

  return (
    <>
      <Button variant={variant} onClick={() => setShowModal(true)}>
        {children}
      </Button>
      <Modal
        isOpen={showModal}
        title={confirmTitle}
        message={confirmMessage}
        onConfirm={handleConfirm}
        onCancel={() => setShowModal(false)}
      />
    </>
  )
}