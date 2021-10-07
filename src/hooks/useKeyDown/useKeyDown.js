import { useCallback, useEffect } from 'react';

const useKeyDown = ({ keyHandlerArr, isEnabled }) => {
  const listener = useCallback((event) => {
    keyHandlerArr.forEach((keyHandler) => {
      const [key, handler] = keyHandler;
      if (key.includes(event.key)) {
        handler();
      }
    });
  }, []);

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener('keydown', listener);
    } else {
      document.removeEventListener('keydown', listener);
    }
  }, [keyHandlerArr, isEnabled]);
};

export default useKeyDown;
