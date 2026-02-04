import { ConfirmButton } from '../atoms/ConfirmButton'

interface TurnActionsProps {
  onResetTurn: () => void
  onResetGame: () => void
}

export const TurnActions = ({ onResetTurn, onResetGame }: TurnActionsProps) => {
  return (
    <div className="turn-actions">
      <ConfirmButton 
        variant="secondary" 
        onClick={onResetTurn}
        confirmTitle="New Turn"
        confirmMessage="¿Resetear Combat y Trade de todos los jugadores?"
      >
        🔄 New Turn
      </ConfirmButton>
      <ConfirmButton 
        variant="primary" 
        onClick={onResetGame}
        confirmTitle="New Game"
        confirmMessage="¿Iniciar nueva partida? Se perderán todos los datos."
      >
        🎮 New Game
      </ConfirmButton>
    </div>
  )
}