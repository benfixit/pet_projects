import React from 'react';
import PropTypes from 'prop-types';

const withUncontrolled = WrappedComponent => {
  const WithUncontrolled = props => {
    const { forwardedRef, ...rest } = props;
    return <WrappedComponent forwardedRef={forwardedRef} {...rest} />;
  };

  WithUncontrolled.propTypes = {
    forwardedRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })
  };

  WithUncontrolled.defaultProps = {
    forwardedRef: {}
  };

  return React.forwardRef((props, ref) => {
    return <WithUncontrolled forwardedRef={ref} {...props} />;
  });
};

export default withUncontrolled;
