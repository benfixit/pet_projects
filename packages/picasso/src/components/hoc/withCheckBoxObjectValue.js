import React from 'react';
import PropTypes from 'prop-types';
import { ObjectValue } from 'react-values';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { v4 } from 'uuid';
import { getDisplayName } from '../../utils/components';

const withCheckBoxObjectValue = WrappedComponent => {
  class WithCheckBoxObjectValue extends React.Component {
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
                entries && entries[index] && entries[index][1];
              return React.cloneElement(element, {
                key: v4(),
                value: elementValue,
                checked: entries && entries[index] && entries[index][1],
                onChange: event => {
                  val[event.target.name] = event.target.checked;
                  set(val);
                }
              });
            });
          }}
        </ObjectValue>
      );
    }
  }

  WithCheckBoxObjectValue.displayName = `WithObjectValue${getDisplayName(
    WrappedComponent
  )}`;

  WithCheckBoxObjectValue.propTypes = {
    defaultValue: PropTypes.shape({}),
    value: PropTypes.shape({}),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.node)
  };

  WithCheckBoxObjectValue.defaultProps = {
    defaultValue: undefined,
    value: undefined,
    onChange: () => {},
    disabled: false,
    children: []
  };

  return hoistNonReactStatics(WithCheckBoxObjectValue, WrappedComponent);
};

export default withCheckBoxObjectValue;
