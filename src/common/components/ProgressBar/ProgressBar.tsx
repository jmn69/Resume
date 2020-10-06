import React from 'react';
import { Container, ProgressBarText, ProgressBarComp } from './ProgressBar.s';

type Props = {
  percentage?: number;
  text?: string;
};

const ProgressBar = ({ percentage, text }: Props) => {
  return (
    <Container>
      <ProgressBarComp percentage={percentage?.toString() || '50'}>
        <ProgressBarText>{text || ''}</ProgressBarText>
      </ProgressBarComp>
    </Container>
  );
};

export default ProgressBar;
