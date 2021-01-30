import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app/app';
import ErrorBoundary from './components/error-bondary/error-bondary';
import RestService from './services/rest-service';
import RestServiceContext from './components/rest-service-context/rest-service-context';
import store from './store';

const restService = new RestService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <RestServiceContext.Provider value={restService}>
        <Router>
          <App />
        </Router>
      </RestServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);