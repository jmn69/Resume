import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.medium};
  padding-left: 8px;
  padding-right: 8px;
  color: #fff;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 48px;
  -webkit-font-smoothing: antialiased;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  box-sizing: border-box;
`;
