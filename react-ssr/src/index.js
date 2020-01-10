import React from 'react';
import ReactDOM from 'react-dom';
import Primary from '../Primary';

document.addEventListener('DOMContentLoaded', function () {
  const node = document.getElementById('root');
  ReactDOM.hydrate(<Primary />, node);
});
