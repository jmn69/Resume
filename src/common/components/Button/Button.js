import React from 'react';
import T from 'prop-types';
import { SvgWrapper, ButtonText, DrawingRect } from './Button.s';

const Button = props => (
  <SvgWrapper>
    <svg
      viewBox='0 0 320 60'
      width='100%'
      height='100%'
      preserveAspectRatio='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <DrawingRect />
      <ButtonText>{props.text}</ButtonText>
    </svg>
  </SvgWrapper>
);

Button.propTypes = {
  text: T.string.isRequired,
};

export default Button;
