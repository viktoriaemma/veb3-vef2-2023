/*
Keyrt með:
node 06.middleware.js

Keyrum nokkur middleware á mismunandi máta.
*/

import express from 'express';

const app = express();

function firstMiddleware(req, res, next) {
  console.log('🚀 FYRSTA MIDDLEWARE');

  console.log('Request á', req.originalUrl);
  next();
}

function secondMiddleware(req, res, next) {
  console.log('🦙 SEINNA MIDDLEWARE');

  console.log('Request á', req.originalUrl);

  res.locals.data = 'foobar';
  next();
}

function thirdMiddleware(req, res, next) {
  console.log('🦝 ÞRIÐJA MIDDLEWARE');

  console.log('Request á', req.originalUrl);

  console.log('Allt búið!');
  next();
}

app.use(firstMiddleware);
app.use(secondMiddleware);

app.get('/', (req, res, next) => {
  console.log('APP GET.....');
  res.send(res.locals.data);

  // annars brjótum við keðju
  next();
});

app.get(
  '/foo',
  // getum blandað allskonar middleware
  [firstMiddleware, firstMiddleware],
  firstMiddleware,
  (req, res) => {
    res.send('🤔');

    // köllum ekki í next(), keðja brotin
  },
);

function prufuMiddleware(req, res, next) {
  console.log('PRRRRRRUUUFFAAAAA');
  next();
}

app.use(thirdMiddleware);
app.use(prufuMiddleware);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
