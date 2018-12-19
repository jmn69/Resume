import styled from 'styled-components';
import T from 'prop-types';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
