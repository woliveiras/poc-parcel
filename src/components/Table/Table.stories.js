import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Table from '.'
import defaultProps from './Table.props'

export default { title: 'Components.Generic.Table', decorators: [withKnobs] }

export const primary = () => <Table {...defaultProps()} />

primary.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
}
