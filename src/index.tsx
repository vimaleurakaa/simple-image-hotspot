import React from 'react';
import ReactDOM from 'react-dom/client';
import { TestComponent } from './Test/TestComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>
);
