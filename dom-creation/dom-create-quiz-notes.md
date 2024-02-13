# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  no, it creates an element, if you want to append you have to append that pokemon card to an item thats being returned
- How do you add an element as a child to another element?
  element.appendChild() or .append()
- What do you pass as the arguments to the `element.setAttribute()` method?
  setAttribute(attribute,value).. if attribute already exists, it will update it with a new value
- What steps do you need to take in order to insert a new element into the page?
  create an element with document.createElement('tag) and assign it a variableName (can add attributes if it needs) append it into the body w document.body.append(variableName)..
- What is the `textContent` property of an element object for?
  to assign text to an element. represents the text content of the associated element
- Name two ways to set the `class` attribute of a DOM element.
  $elementName.setAttribute('class', 'value);
  $domElement.className = 'name';
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  you just have to create the html structure once, and your function can keep creating html structures and adding to the page. You write less code.. debugging lets you know where to fix something rather than multiple places

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
