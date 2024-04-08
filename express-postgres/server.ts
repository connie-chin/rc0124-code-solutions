import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

// only create ONE pool for your whole server.
// Note the database name at the end of the connection string.
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
    select "title",
          "filmId"
       from "films"
  order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err); // going to error middleware. on one side- sends 500 error for client , on other side-error to server
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
    select "filmId",
            "title"
      from "films"
      where "filmId" = $1;
    `;
    const params = [filmId as string]; // $1
    const result = await db.query(sql, params);
    const film = result.rows[0]; // first index of the array we get back is stored in film
    if (!film) {
      // filmId doesn't exist
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query; // we want these values from the request. can console log here to see what it is
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    if (title === undefined) {
      throw new ClientError(400, 'title is required');
    }
    const sql = `
    update "films"
        set "title" = $2
      where "filmId" = $1;
    `; // these numbers point to where they are in the order of the array below
    const params = [filmId as string, title as string]; // this order determines the numbers of $ variables
    await db.query(sql, params); // don't need to store in a variable like the others bc we aren't returning anything
    res.send('Update was a success');
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
