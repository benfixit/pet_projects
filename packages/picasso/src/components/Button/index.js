import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const btnBackground = {
    primary: '#000099',
    secondary: 'blue',
    success: '#009900',
    info: '#000099',
    warning: 'yellow',
    danger: '#990000',
    link: 'white',
}

const StyledButton = styled.button`
    background-color: ${props => btnBackground[props.background]};
    color: ${props => props.color};
    padding: 10px;
    border-radius: 4px;
    outline: none;
`;

const Button = props => {
    const { label, ...rest } = props;
    return (
        <StyledButton {...rest} onClick={() => console.log('Button Clicked!!!')}>{label}</StyledButton>
    );
}

Button.defaultProps = {
    label: '',
    background: 'primary',
    color: 'white'
}

Button.propTypes = {
    label: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string
}

export default Button;