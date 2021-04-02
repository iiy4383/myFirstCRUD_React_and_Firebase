import React from 'react';
import ReactDOM from 'react-dom';
import App, {store} from './Components/App';
import { Provider } from 'react-redux';
import './index.css';    

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);