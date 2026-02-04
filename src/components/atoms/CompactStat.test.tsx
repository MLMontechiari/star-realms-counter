import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CompactStat } from './CompactStat'

describe('CompactStat', () => {
  it('should display value and icon', () => {
    render(<CompactStat icon="🎯" value={15} type="combat" onIncrement={() => {}} onDecrement={() => {}} />)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('🎯')).toBeInTheDocument()
  })

  it('should call onIncrement when + clicked', async () => {
    const onIncrement = vi.fn()
    render(<CompactStat icon="🎯" value={15} type="combat" onIncrement={onIncrement} onDecrement={() => {}} />)
    await userEvent.click(screen.getByText('+'))
    expect(onIncrement).toHaveBeenCalledOnce()
  })

  it('should call onDecrement when - clicked', async () => {
    const onDecrement = vi.fn()
    render(<CompactStat icon="🎯" value={15} type="combat" onIncrement={() => {}} onDecrement={onDecrement} />)
    await userEvent.click(screen.getByText('-'))
    expect(onDecrement).toHaveBeenCalledOnce()
  })
})
