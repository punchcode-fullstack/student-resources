# XYZ Meeting (15 mins)

- specs
  - homepage that displays all products with prices

# CSS Basics (Day 1)

# Lecture 1-1 (15 mins)

# What is CSS?

- Overview
  - layout
  - color
- Cascading Style Sheets
  - definition
  - parts property name and value
  - rule, group of properties

# How to style

## Inline - DEMO
<<<<<<< Updated upstream

```HTML
=======
```html
>>>>>>> Stashed changes
<li style='color: red;'></li>
```

## CSS selectors

- id's
  - camelCased
- classes - multiple classes
  - kabob-cased
- tags

## Internal CSS - DEMO
<<<<<<< Updated upstream

```CSS
=======
```html
>>>>>>> Stashed changes
<styles>
li {
    color: red;
}
</styles>
```

## External CSS - DEMO

- using css file, link style sheet in html head

```HTML
    <link rel="stylesheet" href="main.css">
```

## CSS Properties - DEMO

- show different properties that can be changed in CSS
  - color, font-size, background-color
  - color units
  - units: % px vw vh rem em

# Workshop 1-1 (10 min)

- make sandbox lookup and play around with css properties

# Lecture 1-2 (15 min)

# Box Model

- Box model refers to a box that wraps around every HTML element which allows for margin, borders, and padding to be applied

- [box model image](https://miro.medium.com/max/2948/1*gq1B7v2_gDEi3jkAwAvZNQ.png)

## Border, Margin, Padding - DEMO

- use inspector tool on chrome
- show multiple values in one line

# CSS reset

- margin: 0
- padding: 0
- box-sizing: border-box

# Positioning

- position relative, absolute, static, sticky

# Typography

- font-family
- show how to link fonts from google
- show custom fonts

# workshop 1-2

- add nav bar
- add and pick fonts to app

# lecture (15 min)

# Icons

- fontawesome cdn
  ```html
  <script
    defer
    src="https://pro.fontawesome.com/releases/v5.10.0/js/all.js"
    integrity="sha384-G/ZR3ntz68JZrH4pfPJyRbjW+c0+ojii5f+GYiYwldYU69A+Ejat6yIfLSxljXxD"
    crossorigin="anonymous"
  ></script>
  ```

# Specificity - DEMO

- talk about order of properties in CSS code matters
- !important > inline > id > class > elements
- [specificity diagram](https://devopedia.org/images/article/291/6573.1602765746.jpg)

# Colors

- hsl, rgb, hex
- pallete maker [adobe palette maker](https://color.adobe.com/create/color-wheel)
- mac color picker, digital color meter

# Gradient

```css
div {
  background: linear-gradient(color1, color2, turn);
}
```

# Images vs Background Images

- unsplash royalty free images
  - placeholder (http://www.unsplash.it/size)
- background-positioning

- imitate this [card example](https://bootsnipp.com/snippets/3x5mD)
  - apply to xyz website

# Multiple Column Layout

```CSS
div {
  column: 250px 3;
}
```

# Flexbox - DEMO

- what is flexbox?
- Flexible Box Module - one dimensional layout system
  - deals with layout one dimension at a time
- present use case
  - nav
- flexbox practice
  - [flexboxfroggy](https://flexboxfroggy.com/)
- guide
  - [flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# CSS Day 2

# CSS Grid - DEMO

- 2 dimensional layout system
- allows for rows and columns to be
- present use case
- https://css-tricks.com/snippets/css/complete-guide-grid/
  - share with class

# CSS Grid and Flexbox Combo - DEMO

- use etsy.com product home page as example

# Opacity

- z-index

# SVG

# Pseudo Classes - DEMO

- a:hover
  - '>' change child
  - '~' change sibling
- input:focus

# Pseudo Elements - DEMO

- ::selection
- ::before
- ::after

# Day 3

# Responsive Design

# CSS animations

- keyframes

```CSS
@keyframes boxStep {
    0% {background-color:red; left:0px; top:0px;}
    25% {background-color:yellow; left:200px; top:0px;}
    50% {background-color:blue; left:200px; top:200px;}
    75% {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
}

div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: boxStep;
    animation-duration: 4s;
}
```

- transition

```CSS
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
}

div:hover {
    width: 300px;
}
```

# Design?

- Meaningful Designs
- HTML Sections
- Wireframe - Figma
- limit colors
- limit typography
- css sandbox
  - csszengarden.com

# Responsive Design

- media queries

# Sass
