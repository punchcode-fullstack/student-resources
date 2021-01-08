# html: hypertext markup language
## typical document

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
## Head

- holds meta data (data about data)
- title tag identifies the title of the document (in chrome)

```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="main.css" />
</head>
```
# Body: 

- Where all your visual html elements live

```html
<body>
    <h1>I am a large heading</h1>
    <p>I am a smaller sentence</p>
    <img src="http://placehold.it/250x250" />
</body>
```

---

## Most common html elements

```html
<h1>heading</h1>
<p>a</p>
<strong>bold text</strong>
<a>Link element</a>
<ul>
    <li>here is a list item</li>
</ul>
<hr />
<!-- division on page -->
<div>
  <p>hello</p>
</div>
```

## attributes

- attributes in html (are always specified in the start tag)
- attributes usually come in name/value pairs like: name="value"

```html
<h2 class="text-primary">Some big bold text</h2>
<p id="someEl">hello</p>
```
## Some common attributes

```html
<p id="foo" class="bar">a</p>
<img src="http://www.example.com/image.png" />
<a href="http://www.google.com" target="_blank">click me!</a>
```

## Style considerations

```html
<!-- indentation -->
<!-- bad indentation: hard to follow how the document is structured -->
<ul>
<li>some content here</li>
</ul>
<div>
<p>hello</p>
</div>
<!-- good indentation: easier to read what is inside of where -->
<ul>
    <li>better</li>
</ul>
<div>
    <p>hello</p>
</div>

```

## elements and void elements

```html
<!-- each element follows one of two patterns -->
<!-- void element: AKA self closing tag/element -->
<img src="http://example.com/image.png" alt="description">
<hr>
<p>a parapgraph with opening and closing tags</p>
```