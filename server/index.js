import 'babel-polyfill';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import compression from 'compression'; // Todo: Remove an replace by compression webpack plugin when upgrade to webpack 4
import cookieParser from 'cookie-parser';
import clientConfig from '../webpack/client.dev';
import serverConfig from '../webpack/server.dev';

const DEV = process.env.NODE_ENV === 'development';
const port = DEV ? 3000 : 4030;
const publicPath = clientConfig.output.publicPath;
const outputPath = clientConfig.output.path;
const app = express();

app.use(compression());
app.use(cookieParser());

app.use((req, res, next) => {
  const cookie = req.cookies.language_pref;
  if (cookie === undefined) {
    res.cookie('language_pref', 'fr', { maxAge: 31536000, httpOnly: false });
  }
  next();
});

// UNIVERSAL HMR + STATS HANDLING GOODNESS:

if (DEV) {
  const multiCompiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = multiCompiler.compilers[0];

  app.use(webpackDevMiddleware(multiCompiler, { publicPath }));
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(
    // keeps serverRender updated with arg: { clientStats, outputPath }
    webpackHotServerMiddleware(multiCompiler, {
      serverRendererOptions: { outputPath },
    }),
  );
}
else {
  const clientStats = require('../buildClient/stats.json'); // eslint-disable-line import/no-unresolved, global-require
  const serverRender = require('../buildServer/main.js').default; // eslint-disable-line import/no-unresolved, global-require

  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({ clientStats, outputPath }));
}

app.listen(port, () => {
  console.log(`Listening @ http://localhost:${port}/`); // eslint-disable-line no-console
});
