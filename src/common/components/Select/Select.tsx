/* eslint-disable */
import React, { Component } from 'react';
import { Label, SelectStyled } from './Select.s';

type Props = {
  label?: string;
  required?: boolean;
  error?: any;
  touched?: boolean;
};

export default class Select extends Component<Props> {
  static defaultProps = {
    label: null,
    required: false,
    error: null,
    touched: false,
  };

  render() {
    const { error, touched, ...rest } = this.props;

    return (
      <>
        {this.renderLabel()}
        <SelectStyled
          classNamePrefix="react-select"
          error={!!error && touched}
          {...rest}
        />
      </>
    );
  }

  renderLabel() {
    const { label, required } = this.props;
    let labelRequired = label;
    if (required) {
      labelRequired += '*';
    }
    return label ? <Label>{labelRequired}</Label> : null;
  }
}
