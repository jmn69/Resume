import { Text as RebassText } from 'rebass';
import styled from 'styled-components';

type Props = {
  case?: string;
  color?: string;
  fontSize?: string;
};

export default styled(RebassText)<Props>`
  text-transform: ${(props) => (props.case ? props.case : 'unset')};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.darkGray};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 'unset')};
  transition: color 1300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 1300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
