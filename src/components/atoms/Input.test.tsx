import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('should render with value', () => {
    render(<Input value="Test" onChange={() => {}} />)
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument()
  })

  it('should call onChange when typing', async () => {
    const onChange = vi.fn()
    render(<Input value="" onChange={onChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'abc')
    expect(onChange).toHaveBeenCalledTimes(3)
  })

  it('should apply custom className', () => {
    render(<Input value="" onChange={() => {}} className="custom" />)
    expect(screen.getByRole('textbox')).toHaveClass('input', 'custom')
  })
})
