import Select from 'react-select';
import styled from 'styled-components';

export const Label = styled.div`
  margin-bottom: 8px;
`;

export const SelectStyled = styled(Select)<{ error?: boolean }>`
  font-size: ${(props) => props.theme.font.sizes.medium};
  color: ${(props) => props.theme.colors.darkGray};

  .react-select__control {
    min-height: 30px;
    height: 30px;
    border: 1px solid
      ${(props) =>
        props.error ? props.theme.colors.error : props.theme.colors.gray};
    border-radius: 8px;
    transition: border-color 375ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 375ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    -webkit-box-shadow: 0 0 0 1000px white inset;
    box-shadow: 0 0 0 1000px white inset;
  }

  .react-select__control--is-focused {
    border: 1px solid ${(props) => props.theme.colors.accent};
  }

  .react-select__value-container {
    margin-right: 8px;
    padding: 2px 12px;
  }

  .react-select__indicator {
    padding: 2px;
  }

  .react-select__option--is-selected {
    background: ${(props) => props.theme.colors.accent};
  }

  .react-select__option--is-focused {
    background: ${(props) => props.theme.colors.accent};
  }

  .react-select__placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;
