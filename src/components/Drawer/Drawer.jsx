import cx from 'clsx';
import { useRef, useState } from 'react';

import { Backdrop, CardNav, Portal } from '..';
import { useKeyDown, useOutsideClick } from '../../hooks';
import styles from './Drawer.module.scss';

const Drawer = () => {
  const portalRef = useRef(null);
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [out, setOut] = useState(false);

  const onAnimationEnd = () => {
    if (out) {
      setOut(false);
      setOpen(false);
    }
  };

  const closeDrawer = () => {
    setOut(true);
  };

  const toggleDrawer = () => {
    if (open) {
      closeDrawer();
    } else {
      setOpen(true);
    }
  };

  useOutsideClick({
    handler: closeDrawer,
    isEnabled: open,
    refs: [portalRef, buttonRef],
  });

  useKeyDown({
    keyHandlerArr: [[['Escape'], closeDrawer]],
    isEnabled: open,
  });

  const renderDrawer = () => (
    <>
      <Backdrop show={!out} />
      <Portal
        className={cx(styles.drawer, out ? styles.close : styles.open)}
        component="nav"
        id="drawer"
        onAnimationEnd={onAnimationEnd}
        ref={portalRef}
      >
        <CardNav onClick={closeDrawer} />
      </Portal>
    </>
  );

  return (
    <>
      <button
        aria-label="navigation drawer"
        className={cx(styles.button)}
        onClick={toggleDrawer}
        ref={buttonRef}
        type="button"
      >
        <span className={cx(styles.hamburgerIcon)} />
      </button>
      {open && renderDrawer()}
    </>
  );
};

export default Drawer;
