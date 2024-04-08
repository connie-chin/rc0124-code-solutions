# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  its the official client for Node.js with PostgreSQL... what allows us to connect to our database (the connection string area at top) inside of our server
- How do you tell `pg` which database to connect to?
  add it to the end of the connection string
- How do you send SQL to PostgreSQL from your Express server?
  use db.query() to send SQL queries to PostgreSQL and receive results
- How do you get the rows return from the SQL query?
  const [row] = results.rows (this is destructing. means same thing as rows[0]).... access the rows array
- What must you always remember to put around your asynchronous route handlers? Why?
  try catch block.. good idea bc its significantly easier to handle our errors.
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  when you insert code directly into your SQL through your HTTP request... avoid using parameterized queries.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
