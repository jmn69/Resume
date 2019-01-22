import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-device-width: 991px) {
    top: 100px;
  }

  @media screen and (min-width: 980px) {
    top: 35px;
  }

  @media screen and (min-width: 1280px) {
    top: 55px;
  }

  cursor: pointer;
  position: fixed;
  top: 25px;
  right: 0;
  z-index: 100;
`;

export const SideButton = styled.div`
  position: relative;
  background: ${props => props.theme.colors.darkGray};
  text-align: center;
  color: white;
  height: 15px;
  width: 15px;
  font-size: 14px;
  padding: 2px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    border-bottom: 10px solid ${props => props.theme.colors.darkGray};
    border-left: 10px solid transparent;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: auto;
    border-bottom: none;
    border-left: 10px solid transparent;
    top: 100%;
    border-top: 10px solid ${props => props.theme.colors.darkGray};
  }
`;

export const SideButtonBorder = styled.div`
  position: relative;
  background: ${props => props.theme.colors.lightGray};
  text-align: center;
  color: white;
  height: 17px;
  width: 16px;
  font-size: 14px;
  padding: 2px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    border-bottom: 10px solid ${props => props.theme.colors.lightGray};
    border-left: 10px solid transparent;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: auto;
    border-bottom: none;
    border-left: 10px solid transparent;
    top: 100%;
    border-top: 10px solid ${props => props.theme.colors.lightGray};
  }
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
`;

export const RelativeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const RelativeBorderContainer = styled.div`
  position: absolute;
  top: -1px;
  right: 0;
`;

export const SelectorContainer = styled.div`
  position: absolute;
  top: -11px;
  right: -100px;
  background: ${props => props.theme.colors.lightGray};
  width: 100px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
