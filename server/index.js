import React from 'react';
import express from 'express';
import compression from 'compression';
import cookiesMiddleware from 'universal-cookie-express';
import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {CookiesProvider} from 'react-cookie';
import fs from 'fs';
import path from 'path';
import './ignore-styles';
import App from '../src/app';

const app = express();

app.use(cookiesMiddleware());
app.use(compression());

app.use(express.static(path.join(__dirname, '..', 'static')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'public', 'main.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      logger.error('read err', err);
      return res.status(404).end();
    }

    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={url} context={context}>
          <CookiesProvider cookies={req.universalCookies}>
            <App />
          </CookiesProvider>
        </StaticRouter>
      </StyleSheetManager>,
    );

    const url = req.url;

    const styleTags = sheet.getStyleTags();

    const RenderedApp = process.env.NODE_ENV === 'development' ?
      htmlData : htmlData
        .replace('<style id="serverStyleTags"></style>', styleTags)
        .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    ;

    res.send(RenderedApp);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', (error) => {
  throw error;
});