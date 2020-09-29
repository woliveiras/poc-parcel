import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { device, screenSize } from '../Grid/breakpoints'

const UIGrid = ({ background, children, horizontalMargin, constrains }) =>
  <S.UIGrid constrains={constrains}>
    {children}
  </S.UIGrid>

UIGrid.Item = ({ children, area, background }) =>
  <S.Item area={area} background={background}>
    {children}
  </S.Item>

UIGrid.Item.displayName = 'UIGrid.Item'

UIGrid.propTypes = {
  background: PropTypes.string,
  constrains: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  horizontalMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

UIGrid.Item.propTypes = {
  background: PropTypes.string,
  area: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

UIGrid.defaultProps = {
  constrains: false
}

const getHorizontalMargin = horizontalMargin => {
  if (typeof horizontalMargin === 'number') {
    return `margin: 0 ${horizontalMargin === 0 ? 'auto' : `${horizontalMargin}px`};`
  } else if (typeof horizontalMargin === 'object') {
    return Object.keys(horizontalMargin).map(key => (`
      margin: 0 24px;
      @media ${device[key]} {
        margin: 0 ${horizontalMargin[key]}px;
      }
    `)).join('\n')
  }

  return `
    margin-right: auto;
    margin-left: auto;
    padding-right: var(--be-spacing-layout-01);
    padding-left: var(--be-spacing-layout-01);

    @media ${device.desktop} {
      padding-left: var(--be-spacing-layout-02);
      padding-right: var(--be-spacing-layout-02);
    }
  `
}

const S = {
  UIGrid: styled.main`
    position: relative;
    display: grid;
    grid-template-rows: auto;
    grid-column-gap: 24px;
    grid-row-gap: 25px;
    grid-template-columns: minmax(100%, auto);
    grid-template-areas:
      'anchor'
      'comparator'
      'articles-snippets'
      'article-list'
      'card-offer'
      'article-large'
      'article-large-end'
      'article-snippets-end'
      'article-list-end'
      'article-banner'
      'top-articles-snippets'
      'article-highlight'
      'redirect-button'
      'floating-ad';
    width: 100%;
    max-width: ${({ constrains }) => typeof constrains === 'boolean' ? (constrains ? `${screenSize.xl}px` : '100%') : `${constrains}px`};
    ${({ horizontalMargin }) => getHorizontalMargin(horizontalMargin)}
    padding-top: 30px;

    @media ${device.tablet} {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'anchor anchor'
        'comparator comparator'
        'article-large article-large'
        'article-highlight article-highlight'
        'article-list article-list'
        'card-offer card-offer'
        'article-banner article-banner'
        'top-articles-snippets top-articles-snippets'
        'article-large-end article-large-end'
        'article-snippets-end articles-snippets'
        'article-list-end article-list-end'
        'article-list-end article-list-end'
        'redirect-button redirect-button'
        'floating-ad floating-ad';
    }

    @media ${device.desktop} {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        'anchor anchor anchor floating-ad'
        'comparator comparator comparator floating-ad'
        'article-large article-large articles-snippets floating-ad'
        'article-list article-list article-list floating-ad'
        'card-offer card-offer card-offer floating-ad'
        'article-banner article-banner article-banner floating-ad'
        'top-articles-snippets top-articles-snippets article-highlight floating-ad'
        'article-large-end article-large-end article-snippets-end floating-ad'
        'article-list-end article-list-end article-list-end floating-ad'
        'article-list-end article-list-end article-list-end floating-ad'
        'redirect-button redirect-button redirect-button redirect-button';
    }
  `,
  Item: styled.section`
    background: ${({ background }) => background ? `${background}` : ''};
    grid-area: ${({ area }) => area};
  `
}

export default UIGrid
