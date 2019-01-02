import styled, { css } from 'styled-components';
import React from 'react';
import Text from 'Common/components/Text';

export const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;

  svg {
    @media screen and (min-width: 700px) {
      max-height: 50px;
    }
    @media screen and (min-width: 2000px) {
      max-height: 60px;
    }
    max-height: 40px;
  }

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
      stroke-dasharray: 760;
      stroke-dashoffset: 0;
      stroke-width: 4px;
      fill: ${props => props.theme.colors.accent};
    }
  }

  @keyframes textAppear {
    0% {
      color: transparent;
    }
    100% {
      color: ${props => props.theme.colors.white};
    }
  }
`;
const RectComp = props => (
  <rect width='100%' height='100%' rx='10' className={props.className} />
);

export const DrawingRect = styled(RectComp)`
  fill: ${props => (props.animate ? 'transparent' : '#FE0006')};
  width: 100%;
  height: 100%;
  stroke-dasharray: ${props => (props.animate ? '140 540' : '760')};
  stroke-dashoffset: ${props => (props.animate ? '-474' : '0')};
  stroke-width: 4px;
  stroke: ${props => props.theme.colors.accent};
  ${props =>
    props.animate
      ? `-webkit-animation: 1s draw linear forwards;
  animation: 1s draw linear forwards;`
      : ''}
`;

export const ButtonText = styled(Text)`
  color: ${props =>
    props.animate ? 'transparent' : `${props.theme.colors.white}`};
  letter-spacing: 2px;
  line-height: 32px;
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: uppercase;

  ${props =>
    props.animate
      ? `-webkit-animation: 1s textAppear linear forwards;
  animation: 1s textAppear linear forwards;`
      : ''}

  @media screen and (max-width: 700px) {
    letter-spacing: 1px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 5px;
  text-align: center;

  @media screen and (min-width: 700px) {
    top: 10px;
  }
  @media screen and (min-width: 2000px) {
    top: 15px;
  }
`;
