import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import DivGroup from '../DivGroup';
import Label from '../Label';

const StyledCheckBox = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  margin-right: 8px;
  ${margin}
`;

const CheckBox = props => {
  const { value, ...rest } = props;
  return (
    <DivGroup flexDirection="row" alignItems="center">
      <StyledCheckBox value={value} {...rest} />
      <Label htmlFor={value}>{value}</Label>
    </DivGroup>
  );
};

CheckBox.propTypes = {
  value: PropTypes.string
};

CheckBox.defaultProps = {
  value: ''
};

export default CheckBox;
