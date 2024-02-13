# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  yes
- How do you add an element as a child to another element?
  element.appendChild()
- What do you pass as the arguments to the `element.setAttribute()` method?
  setAttribute(name,value).. if name already exists, it will update it with a new value
- What steps do you need to take in order to insert a new element into the page?
  document.createElement(tag) and add this to a variable of the tag name, insert it soomewhere into the document <body> but saying document.body and where you want to add it to, ex: document.body.append(tagname variable);
- What is the `textContent` property of an element object for?
  getting content of all elements, including script and style elements
- Name two ways to set the `class` attribute of a DOM element.
  $elementName.setAttribute('class', 'value);
  .className = 'name'
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  so you don't have to keep writing what you want to happen, just do it once and call the function with a different argument?

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
