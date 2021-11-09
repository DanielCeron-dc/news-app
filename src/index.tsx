import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from 'containers/App/App';
import {CityInfoProvider } from 'store/news/CityInfoProvider';



ReactDOM.render(
  <React.StrictMode>
    <CityInfoProvider>
        <Router>
          <App/>
        </Router>
    </CityInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

