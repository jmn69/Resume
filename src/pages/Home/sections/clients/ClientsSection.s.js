import styled from 'styled-components';
import T from 'prop-types';

const Container = styled.div`
  height: 100%;
  width: 100%;

  background: rgb(105, 234, 228); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(105, 234, 228, 1) 0%,
    rgba(100, 219, 213, 1) 25%,
    rgba(0, 198, 191, 1) 50%,
    rgba(0, 192, 198, 1) 75%,
    rgba(0, 186, 196, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(105, 234, 228, 1) 0%,
    rgba(100, 219, 213, 1) 25%,
    rgba(0, 198, 191, 1) 50%,
    rgba(0, 192, 198, 1) 75%,
    rgba(0, 186, 196, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(105, 234, 228, 1) 0%,
    rgba(100, 219, 213, 1) 25%,
    rgba(0, 198, 191, 1) 50%,
    rgba(0, 192, 198, 1) 75%,
    rgba(0, 186, 196, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#69eae4',
      endColorstr='#00bac4',
      GradientType=1
    );
`;

Container.propTypes = {
  isFullPageReady: T.bool,
};

export { Container };
