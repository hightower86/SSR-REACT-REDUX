import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';
//import Home from '../client/component/Home';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.url} content={{}}>
      <Routes />
    </StaticRouter>
  );

  return `
  <html>
    <head></head>
      <body>
        <div id='root'>${content}</div>
        <script src="bundle.js"></script>
      </body>
  </html>
  `;
};
