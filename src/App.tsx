import { useState } from 'react'
import { PlayerSelector } from './components/molecules/PlayerSelector'
import { TurnActions } from './components/molecules/TurnActions'
import { PlayerCard, type Player } from './components/organisms/PlayerCard'
import type { PlayerCount } from './types'
import './App.css'

function App() {
  const [numPlayers, setNumPlayers] = useState<PlayerCount>(2)
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: 'Player 1', authority: 50, combat: 0, trade: 0 },
    { id: 2, name: 'Player 2', authority: 50, combat: 0, trade: 0 }
  ])

  const updatePlayerCount = (count: PlayerCount) => {
    setNumPlayers(count)
    const newPlayers: Player[] = []
    for (let i = 1; i <= count; i++) {
      const existingPlayer = players.find(p => p.id === i)
      newPlayers.push(existingPlayer || {
        id: i,
        name: `Player ${i}`,
        authority: 50,
        combat: 0,
        trade: 0
      })
    }
    setPlayers(newPlayers)
  }

  const updatePlayer = (playerId: number, field: keyof Player, value: number | string) => {
    setPlayers(players.map(player => 
      player.id === playerId ? { ...player, [field]: value } : player
    ))
  }

  const resetTurn = () => {
    setPlayers(players.map(player => ({
      ...player,
      combat: 0,
      trade: 0
    })))
  }

  const resetGame = () => {
    setPlayers(players.map(player => ({
      ...player,
      authority: 50,
      combat: 0,
      trade: 0
    })))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🌌 Star Realms Counter 🌌</h1>
        <PlayerSelector 
          selectedPlayers={numPlayers}
          onPlayerCountChange={updatePlayerCount}
        />
      </header>
      
      <div className="players-grid" data-players={numPlayers}>
        {players.map(player => (
          <PlayerCard
            key={player.id}
            player={player}
            onUpdatePlayer={updatePlayer}
          />
        ))}
      </div>

      <div className="actions">
        <TurnActions 
          onResetTurn={resetTurn}
          onResetGame={resetGame}
        />
      </div>
    </div>
  )
}

export default App