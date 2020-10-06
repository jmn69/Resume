import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

type Props = {
  page: string;
  direction: string;
  children: ReactElement;
};

const Switcher = ({ page, direction, children }: Props) => (
  <TransitionGroup className={`switcher ${direction}`} duration={500}>
    <CSSTransition key={page} timeout={500} classNames="slide">
      {children}
    </CSSTransition>
  </TransitionGroup>
);

const mapStateToProps = (state: any) => ({
  page: state.page,
  direction: state.direction,
});

export default connect(mapStateToProps)(Switcher);
