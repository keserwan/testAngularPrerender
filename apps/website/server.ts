/*
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
import * as express from 'express';
import {join} from 'path';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

enableProdMode();

// Because of this https://github.com/angular/angular/issues/18199#issue-243593688
//(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const routes = [
  {path: '/ar/*', view: 'ar/index', bundle: require('../../dist/website/server/ar/main')},
  {path: '/*', view: 'index', bundle: require('../../dist/website/server/en/main')}
];

// Load your engine
app.engine('html', (filePath, options, callback) => {
  options.engine(
    filePath,
    {req: options.req, res: options.res},
    callback
  );
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.render(route.view, {
      req, res, engine: ngExpressEngine({
        bootstrap: route.bundle.AppServerModuleNgFactory,
        providers: [provideModuleMap(route.bundle.LAZY_MODULE_MAP)]
      })
    });
  });
});

app.listen(PORT, () => {
  console.log(`Node server listening on port ${PORT}`);
});
*/


// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import * as compression from 'compression';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();


const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');




// import your bundles
const arBundle = require('../../dist/website/server/ar/main');
const enBundle = require('../../dist/website/server/en/main');



// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

//workaround for https://github.com/angular/angular-cli/issues/9975
import { registerLocaleData } from '@angular/common';
const languages = ['en', 'ar'];
languages.forEach(lang => {
  const locale = require(`@angular/common/locales/${lang}`).default;
  registerLocaleData(locale, lang);
});
//end workaround




app.use(compression());





app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));


// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});




// define your engines for ar and en
// id is needed to find the path
// base is for routing see below
const languageEngines = [{
  id: 'en',
  base: '/en',
  engine: ngExpressEngine({
    bootstrap: enBundle.AppServerModuleNgFactory,
    providers: [provideModuleMap(enBundle.LAZY_MODULE_MAP)]
  })
},
{
  id: 'ar',
  base: '/ar',
  engine: ngExpressEngine({
    bootstrap: arBundle.AppServerModuleNgFactory,
    providers: [provideModuleMap(arBundle.LAZY_MODULE_MAP)]
  })
}];

// Load your engine
app.engine('html', (filePath, options, callback) => {
  options.engine(
    filePath,
    { req: options.req, res: options.res },
    callback
  )
});


app.set('view engine', 'html');

// handle en file routes
//app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('/en/*.*', express.static(join(DIST_FOLDER, 'browser')));
app.get('/ar/*.*', express.static(join(DIST_FOLDER, 'browser')));
// file routes for it
app.get('*.*', express.static(join(DIST_FOLDER, 'browser/en')));


// handle routes for each language
languageEngines.forEach(languageEngine => {

  app.get(`${languageEngine.base}*`, (req, res) => {

    res.render(`${languageEngine.id}/index`, {
      req,
      res,
      engine: languageEngine.engine
    })
  })
});




var http = require("https");



// other routes show en, change later to ip-detection
app.get(`*`, (req, res) => {

  

  var clientIP = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  var options = {
    host: 'api.abc-xzy.com',
    port: 443,
    path: '/api/mobile/getlang?ip=' + clientIP,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    } 
  };

  var reqIP = http.get(options, function (resIP) {

    
    resIP.setEncoding('utf8');
    resIP.on('data', function (chunk) {

      if (chunk.toString().indexOf('en') >= 0) {

        res.render(`en/index`, {
          req,
          res,
          engine: languageEngines[0].engine
        });
      }
      else {

        res.render(`ar/index`, {
          req,
          res,
          engine: languageEngines[1].engine
        });
      }
    });





  });
  reqIP.end();

});















// Start up the Node server
app.listen(PORT, () => {
  // console.log(`hello world! ${DIST_FOLDER}`);
});


