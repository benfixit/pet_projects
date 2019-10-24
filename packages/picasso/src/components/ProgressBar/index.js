import React from 'react';
import PropTypes from 'prop-types';
import { NumberValue } from 'react-values';
import styled from 'styled-components';
import { themeGet } from '../../utils/theme';

const Background = styled.div`
  width: 400px;
  display: flex;
  border: thin solid dodgerblue;
  align-items: center;
  height: 40px;
  background-color: #fafafa;
  padding: 0 10px;
`;

const Bar = styled.div`
  height: 10px;
  border-radius: 10px;
  width: ${props => `${props.progress}px`};
  background-color: ${props => props.bg || themeGet('colors.primary')};
`;

const ProgressBar = props => {
  const { defaultValue, value, onChange, disabled, ...rest } = props;
  return (
    <Background>
      <NumberValue
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {valueProps => {
          const progressValue =
            Math.min(Math.max(0, valueProps.value), 100) * 4;
          return <Bar progress={progressValue} {...rest} />;
        }}
      </NumberValue>
    </Background>
  );
};

ProgressBar.propTypes = {
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

ProgressBar.defaultProps = {
  defaultValue: undefined,
  value: undefined,
  onChange: () => {},
  disabled: false
};

export default ProgressBar;
