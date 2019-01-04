import styled from 'styled-components';
import CardBase from 'Common/components/Card';

export const Container = styled.div`
  min-height: min-content;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 8%;

  @media screen and (max-width: 700px) {
    padding-top: 3%;
  }

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

export const Card = styled(CardBase)`
  width: 100%;
  height: auto;
  margin-bottom: 60px;
  box-shadow: 1px 2px 15px 0 rgba(56, 56, 56, 0.16);
  min-height: 280px;
`;

export const CardsContainer = styled.div`
  flex-wrap: wrap;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
