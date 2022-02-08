import { render, screen } from '@testing-library/react'

import { TextField } from '.'

describe('<TextField />', () => {
  it('shold render the heading', () => {
    const { container } = render(<TextField />)

    expect(
      screen.getByRole('heading', { name: /TextField/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
