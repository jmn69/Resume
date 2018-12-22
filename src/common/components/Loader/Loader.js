import React from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTheme } from 'styled-components';
import { LoaderContainer, MessageWrapper } from './Loader.s';

const Loader = props => (
  <LoaderContainer fullPage={props.fullPage}>
    <FontAwesomeIcon
      spin
      size={props.fullPage ? '3x' : props.size}
      color={props.color ? props.color : props.theme.colors.accent}
      icon='circle-notch'
    />
    {props.message && <MessageWrapper>{props.message}</MessageWrapper>}
  </LoaderContainer>
);

Loader.propTypes = {
  fullPage: T.bool,
  theme: T.any,
  size: T.string,
  color: T.string,
  message: T.string,
};

Loader.defaultProps = {
  size: '1x',
  fullPage: false,
  color: null,
  message: null,
  theme: null,
};

export default withTheme(Loader);
