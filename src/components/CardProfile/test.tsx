import { render, screen } from '@testing-library/react'

import { CardProfile } from '.'

describe('<CardProfile />', () => {
  it('shold render the heading', () => {
    const { container } = render(<CardProfile />)

    expect(screen.getByRole('heading', { name: /CardProfile/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
