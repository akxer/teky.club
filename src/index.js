import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/js/bootstrap';
import './index.scss';
import App from "./App/App";

render(
  <App/>,
  document.getElementById('app')
);

let contextMenu = document.createElement("div");
contextMenu.className = "context-menu";