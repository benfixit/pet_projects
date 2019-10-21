import React from 'react';
import PropTypes from 'prop-types';
import { Value } from 'react-values';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getDisplayName } from '../../utils/components';

const withValue = WrappedComponent => {
  const WithValue = props => {
    const { defaultValue, value, disabled, onChange, ...rest } = props;
    return (
      <Value
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        {({ value: val, set }) => (
          <WrappedComponent
            {...rest}
            value={val}
            onChange={event => {
              return set(event.target.value);
            }}
          />
        )}
      </Value>
    );
  };
  WithValue.displayName = `WithValue(${getDisplayName(WrappedComponent)})`;

  WithValue.propTypes = {
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

  WithValue.defaultProps = {
    defaultValue: undefined,
    value: undefined,
    onChange: () => {},
    disabled: false
  };

  return hoistNonReactStatics(WithValue, WrappedComponent);
};

export default withValue;
