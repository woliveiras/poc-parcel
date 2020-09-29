import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { device } from '../Grid/breakpoints'

const Table = ({ primary, ...props }) => {
  const className = classNames({
    table: true,
    'table--header': primary.header === 'yes',
    'table--large': primary.large === 'yes',
    'table--highlight': primary.highlight === 'yes'
  })

  return (
    <S.Table className={className} {...props} data-component-name='table'>
      <S.Container dangerouslySetInnerHTML={{ __html: primary.table }}></S.Container>
      {primary.legal && <S.Legal>{primary.legal}</S.Legal>}
    </S.Table>
  )
}

Table.propTypes = {
  primary: PropTypes.shape({
    header: PropTypes.string,
    large: PropTypes.string,
    highlight: PropTypes.string,
    table: PropTypes.string.isRequired,
    legal: PropTypes.string
  }).isRequired
}

const S = {
  Table: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-left: calc(var(--be-grid-gutter-mobile) * -1);
    overflow: hidden;
    overflow-x: auto;

    @media ${device.tablet} {
      width: 100%;
      margin-left: unset;
    }

    a:hover {
      color: var(--be-brand-primary);
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-size: inherit;
    }

    table {
      min-width: 70%;

      .title {
        td, td:first-child{
          text-align: center;
          background: var(--be-bg-primary);
        }
      }

      thead {
        tr {
          background: var(--be-bg-primary);
        }
      }

      tr {
        height: 45px;
      }

      td {
        min-width: 170px;
        padding: 10px 24px;
        text-align: center;
        vertical-align: middle;
        background: #fff;
        border: 1px solid #CFCFCF;

        &:first-child {
          text-align: left;
          white-space: normal;
        }

        &:last-child {
          white-space: nowrap;
        }
      }
    }

    &.table--header {

      table thead {

        td, td:first-child{
          background: var(--be-bg-primary);
        }
      }
    }

    &.table--large {

      table {

        tr {
          height: 70px;
        }
      }
    }

    &.table--highlight {

      table tbody {

        td:first-child {
          color: var(--be-brand-primary);
        }
      }
    }
  `,
  Container: styled.div`
    padding: 0 var(--be-grid-gutter-mobile);
    margin: 0 auto;

    @media ${device.tablet} {
      padding: 0;
    }
  `,
  Legal: styled.p`
    padding: 0 var(--be-grid-gutter-mobile);
    margin: 24px 0 0;
    font-size: var(--be-font-size-caption1);
    line-height: var(--be-line-height-overline);
    color: #767676;

    @media ${device.tablet} {
      padding: 0;
    }
  `
}

export default Table
