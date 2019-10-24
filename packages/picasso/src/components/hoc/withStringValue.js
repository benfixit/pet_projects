import React from 'react';
import PropTypes from 'prop-types';
import { StringValue } from 'react-values';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getDisplayName } from '../../utils/components';

const withStringValue = WrappedComponent => {
  const WithStringValue = props => {
    const { defaultValue, value, onChange, disabled, ...rest } = props;
    return (
      <StringValue
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      >
        {({ value: val, set }) => {
          return (
            <WrappedComponent
              value={val}
              onChange={event => set(event.target.value)}
              {...rest}
            />
          );
        }}
      </StringValue>
    );
  };

  WithStringValue.displayName = `WithStringValue${getDisplayName(
    WrappedComponent
  )}`;

  WithStringValue.propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  WithStringValue.defaultProps = {
    defaultValue: undefined,
    value: undefined,
    onChange: () => {},
    disabled: false
  };

  return hoistNonReactStatics(WithStringValue, WrappedComponent);
};

export default withStringValue;
