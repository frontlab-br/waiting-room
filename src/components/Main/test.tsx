import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('shold render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('shold render the color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#f4f4f4'
    })
  })
})
