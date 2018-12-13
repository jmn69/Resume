import styled from 'styled-components';
import T from 'prop-types';

const Container = styled.div`
  background-image: url('https://alvarotrigo.com/fullPage/extensions/imgs/parallax/parallax-4.jpg');
  height: ${props => (props.isFullPageReady ? '100%' : '100vh')};
  width: 100%;
  background-position: 50% 65%;
  background-size: cover;
`;

Container.propTypes = {
  isFullPageReady: T.bool,
};

export { Container };
