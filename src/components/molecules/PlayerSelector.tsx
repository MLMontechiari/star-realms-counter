import { Button } from '../atoms/Button'

interface PlayerSelectorProps {
  selectedPlayers: number
  onPlayerCountChange: (count: number) => void
}

export const PlayerSelector = ({ selectedPlayers, onPlayerCountChange }: PlayerSelectorProps) => {
  return (
    <div className="player-selector">
      <label>Players:</label>
      {[1, 2, 3, 4].map(num => (
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