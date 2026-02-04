import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'

describe('Counter', () => {
  it('should display current value', () => {
    render(
      <Counter
        label="Authority"
        icon="🟢"
        value={50}
        type="authority"
        onIncrement={() => {}}
        onDecrement={() => {}}
      />
    )
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('should call onIncrement with correct amount', async () => {
    const onIncrement = vi.fn()
    render(
      <Counter
        label="Authority"
        icon="🟢"
        value={50}
        type="authority"
        onIncrement={onIncrement}
        onDecrement={() => {}}
      />
    )
    await userEvent.click(screen.getByText('+1'))
    expect(onIncrement).toHaveBeenCalledWith(1)
    
    await userEvent.click(screen.getByText('+5'))
    expect(onIncrement).toHaveBeenCalledWith(5)
  })

  it('should prevent negative values when allowNegative is false', async () => {
    const onDecrement = vi.fn()
    render(
      <Counter
        label="Authority"
        icon="🟢"
        value={0}
        type="authority"
        allowNegative={false}
        onIncrement={() => {}}
        onDecrement={onDecrement}
      />
    )
    await userEvent.click(screen.getByText('-1'))
    expect(onDecrement).not.toHaveBeenCalled()
  })

  it('should allow negative values when allowNegative is true', async () => {
    const onDecrement = vi.fn()
    render(
      <Counter
        label="Combat"
        icon="🎯"
        value={0}
        type="combat"
        allowNegative={true}
        onIncrement={() => {}}
        onDecrement={onDecrement}
      />
    )
    await userEvent.click(screen.getByText('-1'))
    expect(onDecrement).toHaveBeenCalledWith(1)
  })
})
