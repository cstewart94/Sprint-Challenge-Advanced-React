import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
  const [values, setValues] = useLocalStorage('useDarkMode');
  useEffect(() => {
    if (values === true) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [values])
  return [values, setValues]
}

export default useDarkMode;