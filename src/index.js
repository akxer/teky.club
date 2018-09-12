import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './index.scss';
import App from "./App/App";

render(
  <App />,
  document.getElementById('app')
);