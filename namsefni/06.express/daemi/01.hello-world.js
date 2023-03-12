/*
Keyrt með:
node 01.hello-world.js
eða
npm run dev
sem keyrir nodemon sem hlustar á breytingar og endurhleður fyrir okkur

Keyrir upp einfaldan express þjón sem svarar á / og /bye
Þar sem "Hello World!" er ekki með skilgreint path mun það svara fyrir öll
request ef það er á undan /bye og /bye mun aldrei keyra.
Sjáum í seinni dæmum hvernig við getum komist hjá því.
*/

import express from 'express';

export const router = express.Router();

const app = express();

// 127.0.0.1 er það sama og localhost, vélin sem er að
// keyra forritið
const hostname = '127.0.0.1';

// Verðum að velja port sem er >1024, annars er það
// frátekið fyrir stýrikerfið
const port = 3001;

app.use('/', (req, res, next) => {
  console.log();
  console.log('Request Type:', req.method);
  console.log('Time:', new Date().toUTCString());
  res.write('Hall000000');
  res.status(209);

  console.log(
    'Time:',
    new Date().toLocaleString('ja-Jpan-JP-u-ca-japanese-hc-h24', {
      calendar: 'japanese',
      timeStyle: 'full',
      dateStyle: 'full',
      timeZone: 'UTC',
    }),
  );
  console.log(req.body);
  console.log(req.params);
  console.log(req.baseUrl);
  console.log(req.cookies);
  res.status(201);
  res.end();
  next();
});

app.use('ossu', (req, res, next) => {
  console.log();
  console.log('Request Type:', req.method);
  console.log('Time:', new Date().toLocaleString('jp', 'japanese'));
  console.log(req.body);
  console.log(req.params);
  console.log(req.baseUrl);
  console.log(req.cookies);

  res.write('Ossu');
  res.status(202);
  next();
});

app.get('moshi', (req, res, next) => {
  console.log();
  console.log('Request Type:', req.method);
  console.log('Time:', new Date().toLocaleString('jp', 'japanese'));
  console.log(req.body);
  console.log(req.params);
  console.log(req.baseUrl);
  console.log(req.cookies);

  res.write('Moshi');
  res.status(203);
  res.end();
  next();
});

/*
app.use('/bye', (req, res) => {
  res.send('Bye!');
});
*/

/*
app.use((req, res, next) => {
  console.info('Heimsókn!');
  console.log('Time:', Date.now());

  console.log('Request Type:', req.method);
  // res.send('Hhæjjj hæ hoh ohoho ');

  res.json({ nafn: 'Viktoría', id: 9, zodiac: '申' });
  // res.send('Hhæjjj hæ hoh ohoho ');
  next();
});
*/

/*
app.post('/konnichiwa', (req, res, next) => {
  console.info('こんにちわ世界！');
  res.send('virkar');
  res.json({ nafn: 'Katsuki' });
  res.json(null);
  res.json({ user: 'tj' });
  res.status(500).json('oh noes!');
  res.status(404).json('I dont have that');

  next();
});
*/
/*
router.get('/ossu', (req, res) => {
  console.info('おっす！');
  res.send(`Þú ert á ${req.originalUrl}<br>url er ${req.url}`);

  res.json({ nafn: 'Akira' });
});
*/
/*
app.get('moshimoshi', (req, res) => {
  console.info('もしもし');
  res.json({ nafn: 'namae' });
});
*/

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
