import { Heading as RebassHeading } from 'rebass';
import styled from 'styled-components';

type Props = {
  case?: string;
  color?: string;
  fs?: string;
};

export default styled(RebassHeading)<Props>`
  text-transform: ${(props) => (props.case ? props.case : 'unset')};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.darkGray};
  font-size: ${(props) => (props.fs ? props.fs : props.theme.font.sizes.title)};
  width: 100%;
  transition: color 1300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 1300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
