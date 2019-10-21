import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ArrayValue } from 'react-values';
import { v4 } from 'uuid';
import { getDisplayName } from '../../utils/components';

const withArrayValue = WrappedComponent => {
  const WithArrayValue = props => {
    const { defaultValue, value, disabled, onChange, children } = props;
    return (
      <ArrayValue
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        {({ value: val, set }) => (
          <>
            {React.Children.map(children, (element, index) =>
              React.cloneElement(element, {
                key: v4(),
                value: val && val[index],
                onChange: newValue => {
                  val[index] = newValue;
                  set(val);
                }
              })
            )}
          </>
        )}
      </ArrayValue>
    );
  };

  WithArrayValue.displayName = `WithSetValue(${getDisplayName(
    WrappedComponent
  )})`;

  WithArrayValue.propTypes = {
    defaultValue: PropTypes.instanceOf(Array),
    value: PropTypes.instanceOf(Array),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.node)
  };

  WithArrayValue.defaultProps = {
    defaultValue: undefined,
    value: undefined,
    disabled: false,
    onChange: () => {},
    children: []
  };

  return hoistNonReactStatics(WithArrayValue, WrappedComponent);
};

export default withArrayValue;
