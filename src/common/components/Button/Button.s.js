import styled from 'styled-components';
import React from 'react';

export const SvgWrapper = styled.div`
  width: 100%;
  height: 100%;

  @keyframes draw {
    0% {
      stroke-dasharray: 140 540;
      stroke-dashoffset: -474;
      stroke-width: 4px;
      fill: transparent;
    }
    50% {
      stroke-dasharray: 760;
      stroke-dashoffset: 0;
      stroke-width: 4px;
      fill: transparent;
    }
    100% {
      fill: ${props => props.theme.colors.accent};
    }
  }

  @keyframes textAppear {
    0% {
      fill: transparent;
    }
    100% {
      fill: ${props => props.theme.colors.white};
    }
  }
`;

const RectComp = props => (
  <rect width='100%' height='100%' rx='10' className={props.className} />
);

const TextComp = props => (
  <text x='50%' y='50%' className={props.className}>
    {props.children}
  </text>
);

export const DrawingRect = styled(RectComp)`
  fill: transparent;
  width: 100%;
  height: 100%;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 4px;
  stroke: ${props => props.theme.colors.accent};
  -webkit-animation: 1s draw linear forwards;
  animation: 1s draw linear forwards;
`;

export const ButtonText = styled(TextComp)`
  letter-spacing: 4px;
  line-height: 32px;
  font-size: ${props => props.theme.fontSizes.medium};
  fill: ${props => props.theme.colors.white};
  text-anchor: middle;
  alignment-baseline: central;
  text-transform: uppercase;
  -webkit-animation: 1s textAppear linear forwards;
  animation: 1s textAppear linear forwards;
`;
