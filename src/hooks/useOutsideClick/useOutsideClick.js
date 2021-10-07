import { useCallback, useEffect } from 'react';

const useOutsideClick = ({ handler, isEnabled, refs }) => {
  const listener = useCallback((event) => {
    const refsArray = Array.isArray(refs) ? refs : [refs];
    if (refsArray.some((ref) => ref?.current?.contains(event.target))) {
      return;
    }
    handler();
  }, []);

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener('mousedown', listener);
    } else {
      document.removeEventListener('mousedown', listener);
    }
  }, [handler, isEnabled, refs]);
};

export default useOutsideClick;
