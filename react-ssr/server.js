import 'babel-polyfill';
// import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactRouter from 'react-router';
import bodyParser from 'body-parser';
import { StaticRouter } from 'react-router-dom';
import Primary from './Primary';

// const express = require('express')
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const ReactRouter = require('react-router');
// const bodyParser = require('body-parser');
// import { StaticRouter } from 'react-router-dom';

// const App = require('./src/component/App.js');
// const Primary = require('./Primary');


const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(express.static('build'));

app.get('*', (req, res) => {
  if (typeof window !== 'undefined' && window.document) {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Primary />
    </StaticRouter>
  );

  // document.addEventListener('DOMContentLoaded', function () {
  //   const node = document.getElementById('root');
  //   let content = ReactDOMServer.render(<Primary />, node);
  // });

  console.log("CONTENT", content);

  const html = `
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>

      </body>
    </html>
  `;
  res.send(html);
}

});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
