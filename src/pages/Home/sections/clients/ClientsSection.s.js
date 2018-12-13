import styled from 'styled-components';
import T from 'prop-types';

const Container = styled.div`
  background: black;
  height: ${props => (props.isFullPageReady ? '100%' : '100vh')};
  width: 100%;
`;

Container.propTypes = {
  isFullPageReady: T.bool,
};

export { Container };
