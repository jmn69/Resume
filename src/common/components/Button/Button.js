import React from 'react';
import T from 'prop-types';
import {
  SvgContainer,
  ButtonText,
  DrawingRect,
  TextContainer,
} from './Button.s';

const Button = props => (
  <SvgContainer>
    <svg
      width='100%'
      height='100%'
      preserveAspectRatio='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <DrawingRect />
    </svg>
    <TextContainer>
      <ButtonText>{props.text}</ButtonText>
    </TextContainer>
  </SvgContainer>
);

Button.propTypes = {
  text: T.string.isRequired,
};

export default Button;
