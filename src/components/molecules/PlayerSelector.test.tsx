import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlayerSelector } from './PlayerSelector'

describe('PlayerSelector', () => {
  it('should render all player count options', () => {
    render(<PlayerSelector selectedPlayers={2} onPlayerCountChange={() => {}} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('should mark selected player count as active', () => {
    render(<PlayerSelector selectedPlayers={3} onPlayerCountChange={() => {}} />)
    expect(screen.getByText('3')).toHaveClass('active')
  })

  it('should call onPlayerCountChange when clicked', async () => {
    const onChange = vi.fn()
    render(<PlayerSelector selectedPlayers={2} onPlayerCountChange={onChange} />)
    await userEvent.click(screen.getByText('4'))
    expect(onChange).toHaveBeenCalledWith(4)
  })
})
