import React from 'react';
import { connect } from 'react-redux';
import universal from 'react-universal-component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from '../css/Switcher';

const UniversalComponent = universal(({ page }) => import(`./${page}`), {
  minDelay: 500,

  loading: () => (
    <div className={styles.spinner}>
      <div />
    </div>
  ),

  error: () => <div className={styles.notFound}>PAGE NOT FOUND - 404</div>,
});

const Switcher = ({ page, direction }) => (
  <TransitionGroup className={`switcher ${direction}`} duration={500}>
    <CSSTransition key={page} timeout={500} classNames='slide'>
      <UniversalComponent page={page} />
    </CSSTransition>
  </TransitionGroup>
);

const mapStateToProps = state => ({
  page: state.page,
  direction: state.direction,
});

export default connect(mapStateToProps)(Switcher);
