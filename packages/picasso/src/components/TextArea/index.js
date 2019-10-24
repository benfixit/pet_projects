import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border } from 'styled-system';
import withStringValue from '../hoc/withStringValue';
import withUncontrolled from '../hoc/withUncontrolled';
import { themeGet } from '../../utils/theme';

const StyledTextArea = styled.textarea.attrs(props => ({
  size: props.size || '0.5em',
  rows: props.rows || 5,
  cols: props.cols || 60,
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

const TextArea = props => {
  const { name, children, forwardedRef, ...rest } = props;
  return (
    <StyledTextArea
      ref={forwardedRef}
      name={name}
      placeholder="Enter multiline text"
      {...rest}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string,
  forwardedRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })
};

TextArea.defaultProps = {
  children: '',
  forwardedRef: null
};

const UncontrolledTextArea = withUncontrolled(TextArea);

export { UncontrolledTextArea };

export default withStringValue(TextArea);
