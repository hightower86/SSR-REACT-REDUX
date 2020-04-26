import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';
//import Home from '../client/component/Home';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} content={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
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
