# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  so we can debug and inspect the variables in the browser
- What is a "model"?
  the document object model DOM that represents all page contents as objects that can be modified.. host
- Which "document" is being referred to in the phrase Document Object Model?
  its the main entry point, the structure of the page we are looking at.. so the HTML page
- What is the word "object" referring to in the phrase Document Object Model?
  anything on the page we can manipulate?.. its referring to the window?.. referring to how elements ar turned into nodes, and we are able to open it up and look
- What is a DOM Tree?
  backbone of html doc is tags, and every tag is an object, nested tags are children of the enclosing one... its represents html as a tree structure of tags.. root system?
- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementByID(no hashtag) and querySelector
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(). returns all the matches
- Why might you want to assign the return value of a DOM query to a variable?
  so you don't need to search the dom again because querying takes a long time, and u can call it by just saying the variable
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  so the browser can parse through all the elements in the html page before javascript can access them
- What does `document.querySelector()` take as its argument and what does it return?
  takes in css selectors as its argument, and returns an object where u can do something w its properties
- What does `document.querySelectorAll()` take as its argument and what does it return?
  takes in selectors as its argument, returns a static(not-live) node list that represents the documents elements that match the selectors

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
