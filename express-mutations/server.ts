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

// JSON middleware? use anytime expecting to get any request w JSON in its body. any JSON in the body, will be attached to the body property of the express object
app.use(express.json());

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  // passing values in on params
  try {
    const { actorId } = req.params; // destructure actorId from params
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId]; // $1
    const result = await db.query(sql, params);
    const actor = result.rows[0]; // get our 1 actor we got from database
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor); // send actor back as JSON to client
  } catch (err) {
    // error in query gets passed to next
    next(err);
  }
});

app.post('/api/actors', async (req, res, next) => {
  // the string value is the same as a function name, arbitrary. semantically has to do w the data we are dealing with
  try {
    const { firstName, lastName } = req.body; // send on the body as JSON. hits middleware and gets converted to what it was before JSON
    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName are required');
    }
    const sql = `
    insert into "actors"("firstName", "lastName")
        values ($1, $2)
        returning *;`;
    const params = [firstName as string, lastName as string]; // firstName is $1, lastName is $2. this order comes before the insert
    const result = await db.query(sql, params);
    const newActor = result.rows[0];
    res.status(201).json(newActor);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      throw new ClientError(400, 'firstName and lastName are required');
    }
    const sql = `
    update "actors"
    set "firstName"=$1,
        "lastName"=$2
      where "actorId"=$3
      returning *;`;
    const params = [firstName as string, lastName as string, actorId];
    const result = await db.query(sql, params); // sql, with params as fill ins.
    const updatedActor = result.rows[0];
    if (!updatedActor) throw new ClientError(404, `actor ${actorId} not found`);
    res.status(200).json(updatedActor);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  // same as updates, but not as much info
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
    if (!deletedActor) throw new ClientError(404, `actor ${actorId} not found`); // if deletedActor is empty, the deletedActor didn't exist
    res.sendStatus(204); // use when we aren't returning, 204 doesnt return anything, its a no content message   or can do res.status(201).json(deletedActor) to see which actor was deleted
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
