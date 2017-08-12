
import React from 'react';
import { render } from 'react-dom';
import Container from './containers/Container';

require('./favicon.ico'); 


render(
  <Container />,
  document.getElementById('app')
);

