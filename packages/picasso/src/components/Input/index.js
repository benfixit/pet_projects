import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border } from 'styled-system';
import withStringValue from '../hoc/withStringValue';
import withUncontrolled from '../hoc/withUncontrolled';
import { themeGet } from '../../utils/theme';

const StyledInput = styled.input.attrs(props => ({
  type: props.type || 'text',
  size: props.size || '0.5em',
  display: 'inline-block'
}))`
  box-sizing: border-box;
  font-size: 14px;
  border: 2px solid ${themeGet('colors.primary')};
  border-radius: 3px;
  padding: ${props => props.size};
  width: ${props => props.width || 'inherit'};
  ${border}
`;

const Input = props => {
  const { name, forwardedRef, ...rest } = props;
  return (
    <StyledInput
      ref={forwardedRef}
      name={name}
      placeholder="Enter text"
      {...rest}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  forwardedRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })
};

Input.defaultProps = {
  forwardedRef: null
};

const UncontrolledInput = withUncontrolled(Input);

export { UncontrolledInput };

export default withStringValue(Input);
