import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BooleanValue } from 'react-values';
import { themeGet } from '../../utils/theme';

const SwitchContainer = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background-color: ${props =>
    props.on ? props.bg || themeGet('colors.primary') : 'lightGray'};
`;

const SwitchBall = styled.div`
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

const Switcher = props => {
  const { value, defaultValue, disabled, onChange, ...rest } = props;
  return (
    <BooleanValue
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
    >
      {({ value: val, toggle }) => {
        return (
          <SwitchContainer on={val} onClick={toggle} {...rest}>
            <SwitchBall on={val} />
          </SwitchContainer>
        );
      }}
    </BooleanValue>
  );
};

Switcher.propTypes = {
  value: PropTypes.bool,
  defaultValue: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Switcher.defaultProps = {
  value: false,
  defaultValue: true,
  disabled: false,
  onChange: () => {}
};

export default Switcher;
