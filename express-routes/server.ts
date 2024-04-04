import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(
    'The date is',
    new Date(),
    'req.method:',
    req.method,
    'req.path:',
    req.path
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hey in get');
});

app.get('/notes', (req, res) => {
  res.send('Hey in get notes');
});

app.post('/notes/123', (req, res) => {
  res.send('Hey in post notes 123');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
