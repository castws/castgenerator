import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import CastOptions from 'components/CastOptions';
import CastViewer from 'components/CastViewer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <CastOptions />
      <CastViewer />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
