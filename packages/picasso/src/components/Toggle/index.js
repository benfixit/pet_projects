import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '../../utils/theme';
import withBooleanValue from '../hoc/withBooleanValue';

const ToggleContainer = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background-color: ${props =>
    props.on ? props.bg || themeGet('colors.primary') : 'lightGray'};
`;

const ToggleBall = styled.div`
  position: absolute;
  transition: all 0.25s;
  top: 1px;
  width: 25px;
  height: 23px;
  border-radius: 12px;
  border: none;
  left: ${props => (props.on ? '25px' : '1px')};
  background-color: ${themeGet('colors.white')};
`;

const Toggle = props => {
  const { value, onClick, ...rest } = props;
  return (
    <ToggleContainer on={value} onClick={onClick} {...rest}>
      <ToggleBall on={value} />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  value: PropTypes.bool,
  onClick: PropTypes.func
};

Toggle.defaultProps = {
  value: false,
  onClick: () => {}
};

export default withBooleanValue(Toggle);
