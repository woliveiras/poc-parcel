import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import GlobalStyle from '../src/theme'
import StoryRouter from 'storybook-react-router'

addDecorator(storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
))

addDecorator(StoryRouter())

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

