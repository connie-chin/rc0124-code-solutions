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

// JSON middleware?
app.use(express.json());

app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName are required');
    }
    const sql = `
    insert into "actors"("firstName", "lastName")
        values ($1, $2)
        returning *;`;
    const params = [firstName as string, lastName as string];
    const result = await db.query(sql, params);
    const newActor = result.rows[0];
    res.status(201).json(newActor);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName are required');
    }
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
    update "actors"
    set "firstName"=$1,
        "lastName"=$2
      where "actorId"=$3
      returning *;`;
    const params = [firstName as string, lastName as string, actorId];
    const result = await db.query(sql, params);
    const updatedActor = result.rows[0];
    if (!updatedActor) throw new ClientError(404, `actor ${actorId} not found`);
    res.status(200).json(updatedActor);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
    delete from "actors"
          where "actorId"= $1
        returning *;`;
    const params = [actorId];
    const result = await db.query(sql, params);
    const deletedActor = result.rows[0];
    if (!deletedActor) throw new ClientError(404, `actor ${actorId} not found`);
    res.status(204).json(deletedActor);
  } catch (err) {
    next(err);
  }
});

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
