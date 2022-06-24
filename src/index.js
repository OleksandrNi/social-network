import './index.css';
import store from './redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

console.log(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});