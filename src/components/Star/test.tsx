import { render, screen } from '@testing-library/react'

import { Star } from '.'

describe('<Star />', () => {
  it('shold render the heading', () => {
    const { container } = render(<Star />)

    expect(screen.getByRole('heading', { name: /Star/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
