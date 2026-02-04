import { Input } from '../atoms/Input'
import { CompactStat } from '../atoms/CompactStat'
import { Counter } from '../molecules/Counter'
import type { Player } from '../../types'

interface PlayerCardProps {
  readonly player: Player
  readonly onUpdatePlayer: (playerId: number, field: keyof Player, value: number | string) => void
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
          allowNegative={false}
          onIncrement={(amount) => onUpdatePlayer(player.id, 'authority', player.authority + amount)}
          onDecrement={(amount) => onUpdatePlayer(player.id, 'authority', player.authority - amount)}
        />
        
        <div className="turn-stats">
          <CompactStat
            icon="🎯"
            value={player.combat}
            type="combat"
            onIncrement={() => onUpdatePlayer(player.id, 'combat', player.combat + 1)}
            onDecrement={() => onUpdatePlayer(player.id, 'combat', Math.max(0, player.combat - 1))}
          />
          
          <CompactStat
            icon="🪙"
            value={player.trade}
            type="trade"
            onIncrement={() => onUpdatePlayer(player.id, 'trade', player.trade + 1)}
            onDecrement={() => onUpdatePlayer(player.id, 'trade', Math.max(0, player.trade - 1))}
          />
        </div>
      </div>
    </div>
  )
}

export type { Player }