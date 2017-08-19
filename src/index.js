
import React from 'react';
import { render } from 'react-dom';
import Container from './containers/Container';
import  { Provider } from 'react-redux';
import store from './store';

require('./favicon.ico'); 

render(
  <Provider store={store}>
      <Container />
  </Provider>
  ,
  document.getElementById('app')
);