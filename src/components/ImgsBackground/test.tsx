import { render, screen } from '@testing-library/react'

import { ImgsBackground } from '.'

describe('<ImgsBackground />', () => {
  it('shold render the heading', () => {
    const { container } = render(<ImgsBackground />)

    expect(
      screen.getByRole('heading', { name: /ImgsBackground/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
