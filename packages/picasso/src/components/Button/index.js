import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  width,
  typography,
  space,
  border,
  backgroundImage
} from 'styled-system';
import { themeGet } from '../../utils/theme';

const StyledButton = styled.button`
    font-family: ${props => props.fontFamily || themeGet('fontFamily.primary')};
    background-color: ${props => props.bgColor || themeGet('colors.primary')};
    color: ${props => props.color || themeGet('colors.white')};
    background-image: linear-gradient(to bottom, ${themeGet(
      'colors.primary'
    )}, #2980b9);
    box-sizing: border-box;
    margin: 2px 0 6px 0;
    padding: 10px 20px;
    border-radius: 3px;
    border: none;
    font-size: 14px;
    text-decoration: none;
    outline: none;
    ${backgroundImage}
    ${color}
    ${width}
    ${typography}
    ${space}
    ${border}
    :hover {
        cursor: pointer;
        background-color: #3cb0fd;
        background-image: linear-gradient(to bottom, #3cb0fd, ${themeGet(
          'colors.primary'
        )});
    }
`;

const Button = props => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node
};

Button.defaultProps = {
  children: ''
};

export default Button;
