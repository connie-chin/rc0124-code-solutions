import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
  select "description",
          "filmId",
          "replacementCost",
          "title"
  from "films"
  order by "replacementCost" desc
  limit 2;`;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films); // send back that entire array in json
  } catch (err) {
    // if something goes wrong, this handles error
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params; // the filmId value on this object. object destructuring
    if (filmId === undefined || !Number.isInteger(+filmId)) {
      // if its not an integer.
      throw new ClientError(400, 'filmId integer is required');
    }
    const sql = `
  select "description",
          "filmId",
          "replacementCost",
          "title"
  from "films"
  where "filmId" = $1`;
    const params = [filmId as string];
    const result = await db.query(sql, params);
    const film = result.rows[0]; // result.rows is always an array
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.json(film); // sending film object as a json object
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
