import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Main from './pages/main/main';
import './styles';

render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('app')
);
