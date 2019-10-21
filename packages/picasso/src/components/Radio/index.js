import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 } from 'uuid';
import DivGroup from '../DivGroup';
import Label from '../Label';
import withObjectValue from '../hoc/withObjectValue';
import { themeGet } from '../../utils/theme';

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledRadioButton = styled.span`
  flex: 1;
  width: 18px;
  height: 18px;
  margin-right: 12px;
  background-color: ${props =>
    props.checked ? themeGet('colors.primary') : themeGet('colors.white')};
  border: ${props =>
    props.checked ? 'solid lightblue' : `solid ${themeGet('colors.primary')}`};
  border-width: 2px;
  border-radius: 18px;
`;

const LabelSpan = styled.span`
  flex: 1;
  padding: 2px;
`;

const HiddenRadioButton = styled.input.attrs(() => ({
  type: 'radio'
}))`
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;

const RadioButtonComponent = props => {
  const { checked, value, label, name, onChange, ...rest } = props;
  const labelId = v4();
  return (
    <DivGroup px={0}>
      <Label htmlFor={labelId}>
        <HiddenRadioButton
          id={labelId}
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        />
        <StyledRadioButton checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledRadioButton>
        <LabelSpan>{label}</LabelSpan>
      </Label>
    </DivGroup>
  );
};

RadioButtonComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

RadioButtonComponent.defaultProps = {
  value: '',
  checked: false,
  onChange: () => {}
};

const RadioButtonArray = withObjectValue(RadioButtonComponent);

export { RadioButtonArray };

export default RadioButtonComponent;
