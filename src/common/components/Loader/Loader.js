import React from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { withTheme } from 'styled-components';
import { LoaderContainer } from './Loader.s';

const Loader = props => (
  <LoaderContainer fullPage={props.fullPage}>
    <FontAwesomeIcon
      spin
      size={props.fullPage ? '3x' : props.size}
      color={props.color ? props.color : props.theme.colors.accent}
      icon={faCircleNotch}
    />
    Chargement...
  </LoaderContainer>
);

Loader.propTypes = {
  fullPage: T.bool,
  theme: T.any.isRequired,
  size: T.string,
  color: T.string,
};

Loader.defaultProps = {
  size: '1x',
  fullPage: false,
  color: null,
};

export default withTheme(Loader);
