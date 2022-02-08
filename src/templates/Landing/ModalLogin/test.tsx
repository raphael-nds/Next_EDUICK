import { render, screen } from '@testing-library/react'

import { Modal } from '.'

describe('<Modal />', () => {
  it('shold render the heading', () => {
    const { container } = render(<Modal />)

    expect(screen.getByRole('heading', { name: /Modal/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
