import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { device } from '../Grid/breakpoints'

import ErrorIcon from '../../images/error.svg'

const Input = ({ className, warning, error, ...props }) =>
  <S.Field className='field' isErrored={error}>
    <S.Input
      isErrored={error}
      className={`input ${className}`}
      {...props}
    />
    {error &&
      <>
        <S.Error className='input__error'>{warning}</S.Error>
        <ErrorIcon className='input__error-icon' />
      </>}
  </S.Field>

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  warning: PropTypes.string,
  pattern: PropTypes.string,
  mask: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool
}

Input.defaultProps = {
  error: false
}

const S = {
  Field: styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: fit-content;

    .input__error-icon {
      position: absolute;
      top: 14px;
      right: 26px;
      font-size: 20px;
      color: var(--be-feedback-error);
    }
  `,
  Input: styled.input`
    position: relative;
    display: inline-block;
    width: 297px;
    height: 48px;
    padding: var(--be-spacing-internal-04);
    font-size: var(--be-font-size-body1);
    color: var(--be-text-primary);
    background: none;
    border: ${props => props.isErrored ? '1px solid var(--be-feedback-error)' : '1px solid #B4B4C1'};
    border-radius: var(--be-shape-rounded);

    &::placeholder {
      color: var(--be-text-primary);
    }
    @media ${device.tablet} {
      margin-right: var(--be-spacing-internal-04);
    }
  `,
  Error: styled.div`
    margin-top: 4px;
    font-size: var(--be-font-size-caption1);
    color: var(--be-feedback-error);
    text-align: left;
  `
}

export default Input
