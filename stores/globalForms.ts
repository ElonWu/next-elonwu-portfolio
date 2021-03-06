import { atom } from 'recoil';
import { useRecoil } from './base';

const globalFormsState = atom({
  key: 'globalForms',
  default: {},
});

const useGlobalFormsState = () => useRecoil<any>(globalFormsState);

export default useGlobalFormsState;
