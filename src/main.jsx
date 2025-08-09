import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import Filter from './components/Filter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ServiceAdd />
    <ServiceList />
    <Filter />
  </Provider>
);
