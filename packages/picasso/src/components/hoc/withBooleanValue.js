import React from 'react';
import PropTypes from 'prop-types';
import { BooleanValue } from 'react-values';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getDisplayName } from '../../utils/components';

const withBooleanValue = WrappedComponent => {
  const WithBooleanValue = props => {
    const { defaultValue, value, onChange, disabled, ...rest } = props;
    return (
      <BooleanValue
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {valueProps => {
          return (
            <WrappedComponent
              {...rest}
              value={valueProps.value}
              onClick={valueProps.toggle} // For Components that use onClick
              onChange={event => {
                const {
                  target: { type }
                } = event;
                const val =
                  type === 'checkbox'
                    ? event.target.checked
                    : event.target.value;
                return valueProps.set(val);
              }} // For Components that use onChange
            />
          );
        }}
      </BooleanValue>
    );
  };

  WithBooleanValue.displayName = `WithBooleanValue(${getDisplayName(
    WrappedComponent
  )})`;

  WithBooleanValue.propTypes = {
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  WithBooleanValue.defaultProps = {
    defaultValue: undefined,
    value: undefined,
    onChange: () => {},
    disabled: false
  };

  return hoistNonReactStatics(WithBooleanValue, WrappedComponent);
};

export default withBooleanValue;
