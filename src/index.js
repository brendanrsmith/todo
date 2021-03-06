import React from 'react';
import ReactDOM from 'react-dom';

import SettingsContext from './context/site.js';
import App from './app.js';

function Main() {
  return (
    <SettingsContext>
      <App />
    </SettingsContext>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
