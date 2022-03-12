import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CastOptions from './components/CastOptions';
import { RecoilRoot } from 'recoil';
import CastViewer from './components/CastViewer';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <CastOptions />
      <CastViewer />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
