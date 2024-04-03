# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  a primary key in another table, a way to link two tables together that share some relations
- How do you join two SQL tables? (Provide at least two syntaxes.)
  join keyword
  select \_
  from "tableName1"
  join "tableName2" using ("columnNameId");

or
select \_
from "tableName1"
join "tableName2" on "table1"."columnNameId" = "tableName2"."columnNameId"

- How do you temporarily rename columns or tables in a SQL statement?
  using the as keyword in select, from or join
- How do you create a one-to-many relationship between two tables?
  with a foreign key in one table pointing to a primary key in another
- How do you create a many-to-many relationship between two tables?
  by introducing a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table , the 3rd one is a "join table"

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
