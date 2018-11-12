import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Home from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (
  (
    <HashRouter>
      <Route path="/" component={Home} />
    </HashRouter>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
