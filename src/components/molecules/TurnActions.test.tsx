import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TurnActions } from './TurnActions'

describe('TurnActions', () => {  
  it('should render both action buttons', () => {
    render(<TurnActions onResetTurn={() => {}} onResetGame={() => {}} />)
    expect(screen.getByText('🔄 New Turn')).toBeInTheDocument()
    expect(screen.getByText('🎮 New Game')).toBeInTheDocument()
  })

  it('should call onResetTurn when confirmed', async () => {
    const onResetTurn = vi.fn()
    render(<TurnActions onResetTurn={onResetTurn} onResetGame={() => {}} />)
    await userEvent.click(screen.getByText('🔄 New Turn'))
    await userEvent.click(screen.getByText('Confirmar'))
    expect(onResetTurn).toHaveBeenCalledOnce()
  })

  it('should call onResetGame when confirmed', async () => {
    const onResetGame = vi.fn()
    render(<TurnActions onResetTurn={() => {}} onResetGame={onResetGame} />)
    await userEvent.click(screen.getByText('🎮 New Game'))
    await userEvent.click(screen.getByText('Confirmar'))
    expect(onResetGame).toHaveBeenCalledOnce()
  })
})
