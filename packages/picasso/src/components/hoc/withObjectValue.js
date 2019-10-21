import React from 'react';
import PropTypes from 'prop-types';
import { ObjectValue } from 'react-values';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { v4 } from 'uuid';
import { getDisplayName } from '../../utils/components';

const withObjectValue = WrappedComponent => {
  class WithObjectValue extends React.Component {
    render() {
      const { defaultValue, value, onChange, disabled, children } = this.props;
      return (
        <ObjectValue
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
        >
          {({ value: val, set }) => {
            return React.Children.map(children, (element, index) => {
              const entries = Object.entries(val);
              const elementValue =
                entries && entries[index] && entries[index][0];
              return React.cloneElement(element, {
                key: v4(),
                value: elementValue,
                checked: entries && entries[index] && entries[index][1],
                onChange: event => {
                  Object.keys(val).forEach(key => {
                    val[key] = false;
                  });
                  val[event.target.value] = true;
                  set(val);
                }
              });
            });
          }}
        </ObjectValue>
      );
    }
  }

  WithObjectValue.displayName = `WithArrayValue${getDisplayName(
    WrappedComponent
  )}`;

  WithObjectValue.propTypes = {
    defaultValue: PropTypes.shape({}),
    value: PropTypes.shape({}),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.node)
  };

  WithObjectValue.defaultProps = {
    defaultValue: undefined,
    value: undefined,
    onChange: () => {},
    disabled: false,
    children: []
  };

  return hoistNonReactStatics(WithObjectValue, WrappedComponent);
};

export default withObjectValue;
