import '@babel/polyfill';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import cookieParser from 'cookie-parser';
import clientConfig from '../webpack/client.dev';
import serverConfig from '../webpack/server.dev';

const fs = require('fs');

const DEV = process.env.NODE_ENV === 'development';
const port = DEV ? 3000 : 4030;
const publicPath = clientConfig.output.publicPath;
const outputPath = clientConfig.output.path;
const app = express();

const serveGzipped = contentType => (req, res, next) => {
  // does browser support gzip? does the file exist?
  const acceptedEncodings = req.acceptsEncodings();
  if (
    acceptedEncodings.indexOf('gzip') === -1 ||
    !fs.existsSync(
      `./buildClient/${req.url.substr(req.url.lastIndexOf('/') + 1)}.gz`,
    )
  ) {
    next();
    return;
  }

  // update request's url
  req.url = `${req.url}.gz`;
  // set correct headers
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', contentType);

  // let express.static take care of the updated request
  next();
};

app.get('*.js', serveGzipped('text/javascript')); // !
app.get('*.css', serveGzipped('text/css')); // !

app.use(cookieParser());

app.use((req, res, next) => {
  const cookie = req.cookies.language_pref;
  if (cookie === undefined) {
    res.cookie('language_pref', 'fr', { maxAge: 31536000, httpOnly: false });
  }
  next();
});

let isBuilt = false;
const done = () =>
  !isBuilt &&
  app.listen(port, () => {
    isBuilt = true;
    console.log(`BUILD COMPLETE -- Listening @  http://localhost:${port}/`);
  });

// UNIVERSAL HMR + STATS HANDLING GOODNESS:

if (DEV) {
  const multiCompiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = multiCompiler.compilers[0];
  const options = { publicPath, stats: { colors: true } };
  const devMiddleware = webpackDevMiddleware(multiCompiler, options);

  app.use(devMiddleware);
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(multiCompiler));

  devMiddleware.waitUntilValid(done);
}
else {
  const clientStats = require('../buildClient/stats.json'); // eslint-disable-line import/no-unresolved, global-require
  const serverRender = require('../buildServer/main.js').default; // eslint-disable-line import/no-unresolved, global-require

  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({ clientStats, outputPath }));

  done();
}
