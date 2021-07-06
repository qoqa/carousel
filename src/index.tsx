import { StrictMode } from 'react';

import App from './App';

export default function NextIndexWrapper() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}
