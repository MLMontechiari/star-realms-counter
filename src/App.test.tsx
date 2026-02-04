import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('should render app title', () => {
    render(<App />)
    expect(screen.getByText('🌌 Star Realms Counter 🌌')).toBeInTheDocument()
  })

  it('should render player selector', () => {
    render(<App />)
    expect(screen.getByText('Players:')).toBeInTheDocument()
  })

  it('should render 2 players by default', () => {
    render(<App />)
    const playerCards = screen.getAllByDisplayValue(/Player \d/)
    expect(playerCards).toHaveLength(2)
  })

  it('should add players when count changes', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('4'))
    const playerCards = screen.getAllByDisplayValue(/Player \d/)
    expect(playerCards).toHaveLength(4)
  })

  it('should render turn actions', () => {
    render(<App />)
    expect(screen.getByText('🔄 New Turn')).toBeInTheDocument()
    expect(screen.getByText('🎮 New Game')).toBeInTheDocument()
  })
})
