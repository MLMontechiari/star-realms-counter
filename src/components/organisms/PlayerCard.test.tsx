import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlayerCard } from './PlayerCard'

describe('PlayerCard', () => {
  const mockPlayer = {
    id: 1,
    name: 'Player 1',
    authority: 50,
    combat: 10,
    trade: 5
  }

  it('should render player name', () => {
    render(<PlayerCard player={mockPlayer} onUpdatePlayer={() => {}} />)
    expect(screen.getByDisplayValue('Player 1')).toBeInTheDocument()
  })

  it('should display all counter values', () => {
    render(<PlayerCard player={mockPlayer} onUpdatePlayer={() => {}} />)
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('should call onUpdatePlayer when name changes', async () => {
    const onUpdate = vi.fn()
    render(<PlayerCard player={mockPlayer} onUpdatePlayer={onUpdate} />)
    const input = screen.getByDisplayValue('Player 1')
    await userEvent.clear(input)
    await userEvent.type(input, 'New Name')
    expect(onUpdate).toHaveBeenCalled()
  })

  it('should update authority when buttons clicked', async () => {
    const onUpdate = vi.fn()
    render(<PlayerCard player={mockPlayer} onUpdatePlayer={onUpdate} />)
    await userEvent.click(screen.getByText('+1'))
    expect(onUpdate).toHaveBeenCalledWith(1, 'authority', 51)
  })
})
