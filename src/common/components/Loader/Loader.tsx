import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@/hooks/useTheme';
import { LoaderContainer, MessageWrapper } from './Loader.s';

type Props = {
  fullPage?: boolean;
  size?: any;
  color?: string;
  message?: string;
};

const Loader = ({ fullPage, color, size, message }: Props) => {
  const theme = useTheme();

  const defaultSize = size || '1x';
  return (
    <LoaderContainer fullPage={fullPage}>
      <FontAwesomeIcon
        spin
        size={fullPage ? '3x' : defaultSize}
        color={color || theme.colors.accent}
        icon="circle-notch"
      />
      {message && <MessageWrapper>{message}</MessageWrapper>}
    </LoaderContainer>
  );
};

export default Loader;
