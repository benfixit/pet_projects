import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BooleanValue } from 'react-values';
import { themeGet } from '../../utils/theme';

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
  const { defaultValue, disabled, onChange, ...rest } = props;
  return (
    <BooleanValue
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
    >
      {({ value: val, toggle }) => {
        return (
          <ToggleContainer on={val} onClick={toggle} {...rest}>
            <ToggleBall on={val} />
          </ToggleContainer>
        );
      }}
    </BooleanValue>
  );
};

Toggle.propTypes = {
  defaultValue: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Toggle.defaultProps = {
  defaultValue: false,
  disabled: false,
  onChange: () => {}
};

export default Toggle;
