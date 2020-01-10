import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './component/App';

const app = express();
const port = 3000;
app.use(express.static('public'));

app.use((req, res) => {

  const html = renderToString(<App />);

  res.send(`
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>React SSR</title>
      </head>
      <body>
        <div id='root'>${html}</div>
        <script src='main.js' async></script>
      </body>
    </html>
  `);
})

app.listen(port, () => {
  console.log(`localhost:${port}`);
})
