import React, { ReactElement, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

type Props = {
  page: string;
  direction: string;
  children: ReactElement;
};

const Switcher = ({ page, direction, children }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 250);

    return () => {
      setShow(false);
      clearTimeout(timeout);
    };
  }, [page]);

  return (
    <TransitionGroup className={`switcher ${direction}`} duration={500}>
      <CSSTransition key={page} timeout={500} classNames="slide">
        <>{show ? children : null}</>
      </CSSTransition>
    </TransitionGroup>
  );
};

const mapStateToProps = (state: any) => ({
  page: state.page,
  direction: state.direction.animation,
});

export default connect(mapStateToProps)(Switcher);
