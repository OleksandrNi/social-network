import './index.css';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState())

store.subsriber(rerenderEntireTree);