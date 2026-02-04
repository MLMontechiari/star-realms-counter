import { Input } from '../atoms/Input'
import { Counter } from '../molecules/Counter'

export interface Player {
  id: number
  name: string
  authority: number
  combat: number
  trade: number
}

interface PlayerCardProps {
  player: Player
  onUpdatePlayer: (playerId: number, field: keyof Player, value: number | string) => void
}

export const PlayerCard = ({ player, onUpdatePlayer }: PlayerCardProps) => {
  return (
    <div className="player-card">
      <div className="player-header">
        <Input
          value={player.name}
          onChange={(value) => onUpdatePlayer(player.id, 'name', value)}
          className="player-name"
        />
      </div>
      
      <div className="counters">
        <Counter
          label="Authority"
          icon="🟢"
          value={player.authority}
          type="authority"
          allowNegative={true}
          onIncrement={(amount) => onUpdatePlayer(player.id, 'authority', player.authority + amount)}
          onDecrement={(amount) => onUpdatePlayer(player.id, 'authority', player.authority - amount)}
        />
        
        <Counter
          label="Combat"
          icon="🎯"
          value={player.combat}
          type="combat"
          onIncrement={(amount) => onUpdatePlayer(player.id, 'combat', player.combat + amount)}
          onDecrement={(amount) => onUpdatePlayer(player.id, 'combat', player.combat - amount)}
        />
        
        <Counter
          label="Trade"
          icon="🪙"
          value={player.trade}
          type="trade"
          onIncrement={(amount) => onUpdatePlayer(player.id, 'trade', player.trade + amount)}
          onDecrement={(amount) => onUpdatePlayer(player.id, 'trade', player.trade - amount)}
        />
      </div>
    </div>
  )
}