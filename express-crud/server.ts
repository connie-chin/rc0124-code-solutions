import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';
// import { Tracing } from 'trace_events';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";`;
    const result = await db.query<Grade>(sql);
    const grades = result.rows;
    res.status(200).json(grades);
    if (!grades) throw new ClientError(500, 'This grade query failed');
  } catch (err) {
    // the 500
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    select *
      from "grades"
      where "gradeId" = $1;`;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (
      !name ||
      !course ||
      !score ||
      score < 0 ||
      score > 100 ||
      !Number.isInteger(+score)
    ) {
      throw new ClientError(400, `Invalid input for grade`);
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
                values ($1, $2, $3)
                returning *;
    `;
    const params = [name as string, course as string, score as number];
    const result = await db.query<Grade>(sql, params);
    const insertedGrade = result.rows[0];
    res.status(201).json(insertedGrade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const { name, course, score } = req.body;
    if (
      !name ||
      !course ||
      !score ||
      score < 0 ||
      score > 100 ||
      !Number.isInteger(+score)
    ) {
      throw new ClientError(400, `Invalid input for grade`);
    }
    const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;`;
    const params = [name as string, course as string, score as number, gradeId];
    const result = await db.query<Grade>(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    delete from "grades"
          where "gradeId"=$1
          returning *;`;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const deletedGrade = result.rows[0];
    if (!deletedGrade) throw new ClientError(404, `actor ${gradeId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
