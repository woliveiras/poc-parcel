import React from 'react'

import Input from '.'
import defaultProps from './Input.props'

export default { title: 'Components.General.Input' }

export const primary = () => <Input placeholder={defaultProps.placeholder} />
export const errored = () => <Input {...defaultProps} />
