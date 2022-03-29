import { atom } from 'recoil';
import { useRecoil } from './base';

const darkModeState = atom({
  key: 'darkMode',
  default: false,
});

const useIsDarkMode = () => useRecoil<boolean>(darkModeState);

export default useIsDarkMode;
