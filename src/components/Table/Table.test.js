import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Table from './Table'
import props from './Table.props'

const defaultProps = props()

describe('Table', () => {
  it('should render a table', () => {
    const { container } = render(<Table {...defaultProps} />)
    const rows = container.querySelectorAll('tr')
    const cels = rows[0].querySelectorAll('td')
    expect(cels[0].textContent).toBe(' Pacote ')
    expect(cels[1].textContent).toBe(' Canais ')
  })
})
