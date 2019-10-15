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








// const domino = require('domino');
// const fs = require('fs');
// const template = fs.readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
// const win = domino.createWindow(template);
// win.fetch = fetch;
// global['window'] = win;
// global['DOMTokenList'] = win.DOMTokenList;
// global['Node'] = win.Node;
// global['Text'] = win.Text;
// global['HTMLElement'] = win.HTMLElement;
// global['navigator'] = win.navigator;
// global['Event'] = win.Event;
// global['Event']['prototype'] = win.Event.prototype;








// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist/website/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.use(compression());

 

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
     provideModuleMap(LAZY_MODULE_MAP)
    // ,{ provide: 'request', useFactory: () => options.req },
    // { provide: 'host',  useFactory: () => options.req.get('host') }
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});









//trying to inject csrf
var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var bodyParser = require('body-parser')
 
// setup route middlewares
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
   
// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser())

// app.get('/requestcsrf', csrfProtection, function (req, res) {
//   // pass the csrfToken to the view
//   res.render('send', { csrfToken: req.csrfToken() })
// })

// app.post('/process', parseForm, csrfProtection, function (req, res) {
//   res.send('data is being processed')
// })


 app.get('/process', csrfProtection, function (req, res) {
  res.send('done');//req.csrfToken()
})

// app.get('/process2', csrfProtection, function (req, res) {
//   // pass the csrfToken to the view
//   res.render('send', { req, csrfToken: req.csrfToken() })
// })




// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*',csrfProtection, (req, res) => {
  var token = req.csrfToken();
  res.setHeader('Set-Cookie', "XSRF-TOKEN=" + token + ";Path=/; HttpOnly; SameSite=Strict");
  res.render('index', { req, res});
  //res.render('index', { req, csrfToken: req.csrfToken() });
});














// Start up the Node server
app.listen(PORT, () => {
  //console.log(`Node server listening on http://localhost:${PORT}`);
});