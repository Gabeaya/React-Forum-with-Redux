import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
// import reducer from './reducers/post-list-reducer'; replace with our root reducer
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

// const store = createStore(reducer); replace with root reducer
const store = createStore(rootReducer);
//window into our store
store.subscribe(() =>
  console.log(store.getState())
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
