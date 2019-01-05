import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { AppContainer } from 'react-hot-loader';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, 
    document.getElementById('app')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const newApp = require('./components/App').default 
    render(newApp);
  })
}