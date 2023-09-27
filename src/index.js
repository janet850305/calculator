import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import Calculator from './calculator';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

reportWebVitals();