import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './reducers/ticket-list-reducer';
import rootReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';

// const store = createStore(
//   rootReducer,
//   // InitialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(rootReducer);

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));


serviceWorker.unregister();
