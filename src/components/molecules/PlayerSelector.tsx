import { Button } from '../atoms/Button'
import type { PlayerCount } from '../../types'

interface PlayerSelectorProps {
  readonly selectedPlayers: PlayerCount
  readonly onPlayerCountChange: (count: PlayerCount) => void
}

const PLAYER_COUNTS: readonly PlayerCount[] = [1, 2, 3, 4] as const

export const PlayerSelector = ({ selectedPlayers, onPlayerCountChange }: PlayerSelectorProps) => {
  return (
    <div className="player-selector">
      <label>Players:</label>
      {PLAYER_COUNTS.map(num => (
        <Button
          key={num}
          variant="player"
          active={selectedPlayers === num}
          onClick={() => onPlayerCountChange(num)}
        >
          {num}
        </Button>
      ))}
    </div>
  )
}