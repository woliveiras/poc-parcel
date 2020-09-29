import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { device } from '../Grid/breakpoints'

const Column = ({
  gutterSum,
  offsetLeft,
  offsetRight,
  aligment,
  mobile,
  tablet,
  desktop,
  styles,
  children
}) => (
  <S.Column
    aligment={aligment}
    gutterSum={gutterSum}
    offsetLeft={offsetLeft}
    offsetRight={offsetRight}
    mobile={mobile}
    tablet={tablet}
    desktop={desktop}
    style={styles}
  >
    { children }
  </S.Column>
)

Column.propTypes = {
  aligment: PropTypes.string,
  gutterSum: PropTypes.oneOfType([
    PropTypes.shape({
      mobile: PropTypes.number,
      tablet: PropTypes.number,
      desktop: PropTypes.number
    }),
    PropTypes.number
  ]),
  offsetLeft: PropTypes.oneOfType([
    PropTypes.shape({
      mobile: PropTypes.number,
      tablet: PropTypes.number,
      desktop: PropTypes.number
    }),
    PropTypes.number
  ]),
  offsetRight: PropTypes.oneOfType([
    PropTypes.shape({
      mobile: PropTypes.number,
      tablet: PropTypes.number,
      desktop: PropTypes.number
    }),
    PropTypes.number
  ]),
  mobile: PropTypes.number,
  tablet: PropTypes.number,
  desktop: PropTypes.number,
  styles: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const S = {
  Column: styled.div`
    ${({
      gutterSum, aligment, mobile, tablet, desktop, offsetLeft, offsetRight
    }) => `
    --column-size-mobile: calc(calc(100% - ${gutterSum && (gutterSum.mobile || gutterSum || 0)}px) / 4);

    display: flex;
    justify-content: ${(aligment === 'center' && 'center') || (aligment === 'right' && 'flex-end') || (aligment === 'left' && 'left') || 'normal'};
    width: calc(var(--column-size-mobile) * ${mobile || 1});

    && {
      ${offsetRight && `&& {
        margin-right: calc(var(--column-size-mobile) * ${(offsetRight < 4 && (offsetRight.mobile || offsetRight)) || 0});
      }`};
      ${offsetLeft && `&& {
        margin-left: calc(var(--column-size-mobile) * ${(offsetLeft < 4 && (offsetLeft.mobile || offsetLeft)) || 0});
      }`};
    }

    @media ${device.tablet} {
      --column-size-tablet: calc(calc(100% - ${gutterSum && (gutterSum.tablet || gutterSum || 0)}px) / 8);

      width: calc(var(--column-size-tablet) * ${tablet || 1});

      && {
        ${offsetRight && `&& {
          margin-right: calc(var(--column-size-tablet) * ${(offsetRight < 8 && (offsetRight.tablet || offsetRight)) || 0});
        }`};
        ${offsetLeft && `&& {
          margin-left: calc(var(--column-size-tablet) * ${(offsetLeft < 8 && (offsetLeft.tablet || offsetLeft)) || 0});
        }`};
      }
    }

    @media ${device.desktop} {
      --column-size-desktop: calc(calc(100% - ${gutterSum && (gutterSum.desktop || gutterSum || 0)}px) / 12);

      width: calc(var(--column-size-desktop) * ${desktop || 1});

      && {
        ${offsetRight && `&& {
          margin-right: calc(var(--column-size-desktop) * ${(offsetRight < 12 && (offsetRight.desktop || offsetRight)) || 0});
        }`};
        ${offsetLeft && `&& {
          margin-left: calc(var(--column-size-desktop) * ${(offsetLeft < 12 && (offsetLeft.desktop || offsetLeft)) || 0});
        }`};
      }
    }
  `}
  `
}

export default Column
