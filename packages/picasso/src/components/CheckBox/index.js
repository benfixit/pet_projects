import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 } from 'uuid';
import DivGroup from '../DivGroup';
import Label from '../Label';
import withCheckBoxObjectValue from '../hoc/withCheckBoxObjectValue';
import { themeGet } from '../../utils/theme';

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckBox = styled.span`
  flex: 1;
  width: 18px;
  height: 18px;
  margin-right: 12px;
  background-color: ${props =>
    props.checked ? themeGet('colors.primary') : themeGet('colors.white')};
  border: ${props =>
    props.checked ? 'solid lightblue' : `solid ${themeGet('colors.primary')}`};
  border-width: 2px;
  border-radius: 5px;
`;

const LabelSpan = styled.span`
  flex: 1;
  padding: 2px;
`;

const HiddenCheckBox = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;

const CheckBoxComponent = props => {
  const { value, label, name, onChange, ...rest } = props;
  const labelId = v4();
  return (
    <DivGroup px={0}>
      <Label htmlFor={labelId}>
        <HiddenCheckBox
          id={labelId}
          name={name}
          checked={value}
          onChange={onChange}
          {...rest}
        />
        <StyledCheckBox checked={value}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckBox>
        <LabelSpan>{label}</LabelSpan>
      </Label>
    </DivGroup>
  );
};

CheckBoxComponent.propTypes = {
  value: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

CheckBoxComponent.defaultProps = {
  value: false,
  onChange: () => {}
};

const CheckBoxArray = withCheckBoxObjectValue(CheckBoxComponent);

export { CheckBoxArray };

export default CheckBoxComponent;
