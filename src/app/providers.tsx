'use client';

import { ReactNode } from 'react';
import '../i18n';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <>{children}</>;
};

export default Providers;
