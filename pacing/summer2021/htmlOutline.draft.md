# What is HTML?
* definition of a markup language
* created in 1989
* explain links from one document to another

# Tags: Fundamental
* opening tag
* closing tag
* tag content
* h[1-6] tags

## Demo
```html
<h1>Hello World</h1>
```

# HTML ignores all whitespace
## Demo:
```html
            <h1>
H
e
l
l
o

World
</h1>
```

# Tags: Self Closing
```html
<br>
<hr>
```

## Demo
```html
<h1>Hello</h1>
<br>
</h1>World</h1>
<hr>
<h1>Goodbye</h1>
```

# Attributes
* make tags more versatile
* key/value pairs
* img tag

## Demo
```html
<img src="https://via.placeholder.com/150" width="150" height="150" alt="placeholder image">
```

# Nesting tags
* valid vs invalid nesting
* ul, ol, li

## Demo
```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
<ul>
<hr>
<ol>
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>
```

# Document Structure
* definition HTML element
* tags give structure to a document
* inline vs block elements
* div, span, p

## Demo
```html
<div>
    <p>This is the first paragraph in the first document division</p>
    <p>This is the second paragraph in the first document division</p>
</div>
<div>
    <p>This is the first paragraph in the second document division</p>
    <p>This is the second paragraph in the second document division</p>
</div>
<div>
    <p>
        Here is some text <span>inside a span</span>.
        For now, just notice that it didn't cause a line break.
    </p>
</div>
```

# Better use of tags (HTML5)
* HTML5 gave us a lot of new tags that make the meaning clearer
* There are many ways to divide a document now.
    * additional block elements: header, footer, main, section, article, aside, nav, etc

## Demo (last demo rewritten)
<article>
  <p>This is the first paragraph in the first document division</p>
    <p>This is the second paragraph in the first document division</p>
</article>
<article>
    <p>This is the first paragraph in the second document division</p>
    <p>This is the second paragraph in the second document division</p>
</article>
<article>
    <p>
        Here is some text <span>inside a span</span>.
        For now, just notice that it didn't cause a line break.
    </p>
</article>
```

# What about media?
* play sound with the audio tag
* play video with the video tag
* they have built in players

## Demo
```html
<audio controls>
  <source src="myAudioFile.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

# How do you show an HTML tag in HTML?
* special chars ```&quot; &amp; &copy; &bull;```

## Demo
```html
<section>
    <h1>Special Characters via escape sequences</h1>
    &lt;h1&gt;Hello World/&lt;&gt;
</section>
<section>
    <h1>Copyright example</h1>
    &copy;2021 Techimpact All rights reserved
</section>
```

# How is HTML shown
* web browsers
    * they render HTML
    * https://en.wikipedia.org/wiki/Usage_share_of_web_browsers

# Where does a webpage come from?
* web servers
* basic request/response cycle


# Valid HTML
* doctypes
* head, title, meta, link, body
* HTML validator https://validator.w3.org/

# Forms: Basic
* revisit the request/response model
* define frontend
* define backend
* tags:
    * form
    * input type=text
    * input type=submit
* attributes:
    * id
    * name

# Forms: Continued
* label
* action

# Forms: Real World Example
* user signup form with validation

## Workshop
* create a contact us form with the following fields:
    * email address
    * name
    * message

# XML Files
* describe and show a basic xml file
* explain an xml schema
* HTML4 was converted to XML

# Vscode and HTML
* emmet basics

# The HTML spec
* https://html.spec.whatwg.org/
