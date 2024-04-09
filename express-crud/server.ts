import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

// type Grade = {
//   gradeId?: number;
//   name: string;
//   course: string;
//   score: number; // A number between 0 and 100
// };

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";`;
    const result = await db.query(sql);
    const grades = result.rows;
    res.status(200).json(grades); // might not need results attached?
    if (!grades) throw new ClientError(500, 'This grade query failed');
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    console.log('gradeId', gradeId);
    // if (!Number.isInteger(+gradeId)) {
    //   throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    // }
    const sql = `
    select *
      from "grades"
      where "gradeId" = $1;`;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
