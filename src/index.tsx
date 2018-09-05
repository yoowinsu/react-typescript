import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './page/index/App';
import './index.scss';
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
