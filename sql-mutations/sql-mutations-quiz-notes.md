# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  insert, select, update, delete
- How do you add a row to a SQL table?
  insert into "tableName" ("columnInfo1", "columnInfo2", "columnInfo3", "columnInfo4")
  values ('rowVal1', 'rowVal2', 'rowVal3', 'rowVal4')
- How do you add multiple rows to a SQL table at once?
  , ('rowVal1', 'rowVal2', 'rowVal3', 'rowVal4')
- How do you update rows in a database table?
  update "tableName"
  set "columnName" = 'columnValue'
  where "tableId" = id#;
- How do you delete rows from a database table?
  delete
  from "tableName"
  where
  and
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  cuz without it, it would update every row in the table.
- How do you accidentally delete or update all rows in a table?
  not including a where
- How do you get back the modified row without a separate `select` statement?
  returning \*;
- Why did you get an error when trying to delete certain films?
  bc it violates foreign key constraint "film_actor_film_id_fkey" on table "castMembers"... the films we are trying to delete are interrelated to the castMembers table. cast members keeps it as a firegin key and we specifically told it not to delete it

  cast members is dependent on actorid from actor's table

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
