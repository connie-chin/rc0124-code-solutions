# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?
  its the primary way of interacting with relational databases. its how we retrieve, create, and manipulate data. its diff than javascript (an imperative language where we tell it what to do and how to do it) bc its a declarative programming language (we describe the results we want and the programming environment comes up with its own plan for getting the results)
- How do you retrieve specific columns from a database table?
  with select "whatevercolumn" from "typeofdata"
  select keyword, a comma separated list of column names in double quotes...
  a from clause, the table you want the data from, and semicolon .. dont need to indent, but should do it for style and readability, can select all columns in a table w \*, no quotes. must do these in a row, precedence matters.. google search it
- How do you filter rows based on some specific criteria?
  adding a where clause after the from clause, wrap the text value in single quotes not double
- What are the benefits of formatting your SQL?
  style and readability
- What are four comparison operators that can be used in a `where` clause?
  > < = !=
- How do you limit the number of rows returned in a result set?
  limit clause that comes last, it includes a literal integer number
- How do you retrieve all columns from a database table?
  -
- How do you control the sort order of a result set?
  by adding order by clause "columnName" after from "table" . default sort order is ascending order but can specify with desc after

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
