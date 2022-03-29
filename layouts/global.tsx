import RootStore from '@stores/base';
import type { FC } from 'react';

const GlobalLayout: FC = ({ children }) => {
  return <RootStore>{children}</RootStore>;
};

export default GlobalLayout;
