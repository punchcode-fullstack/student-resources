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

```html
<li style="color: red;"></li>
```

## CSS selectors

- id's
  - camelCased
- classes - multiple classes
  - kabob-cased
- tags

## Internal CSS - DEMO

```html
<styles> li { color: red; } </styles>
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
- selectors
  - id, classes, data, element

# Workshop 1-1 (20 min)

- make sandbox lookup and play around with css properties
  - make from exercise-a tag
  - link css file

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

# Typography

- font-family
- show how to link fonts from google
- show custom fonts
- show @import
<!-- # workshop 1-2 (15min)


- add nav bar
- add and pick fonts to app -->

# lecture 1-3 (45 min)

# height width

- inline and block level behavior
- parent child %

# display

- block Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width

- inline Displays an element as an inline element (like <span>). Any height and width properties will have no effect

- inline-block Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values

# Positioning

- margin
- position relative, absolute, static, sticky

# Specificity - DEMO

- talk about order of properties in CSS code matters
- !important > inline > id > class > elements
- [specificity diagram](https://devopedia.org/images/article/291/6573.1602765746.jpg)

<!-- # workshop 1-3-1
- exercise-b
- specificity exercise
- without changing html, target elements and change styling -->

# Icons

- fontawesome cdn
  ```html
  <!-- <script
    defer
    src="https://pro.fontawesome.com/releases/v5.10.0/js/all.js"
    integrity="sha384-G/ZR3ntz68JZrH4pfPJyRbjW+c0+ojii5f+GYiYwldYU69A+Ejat6yIfLSxljXxD"
    crossorigin="anonymous"
  ></script> -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  ```

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
  - placeholder (http://www.unsplash.it/400)
- background-positioning

<!-- # workshop 1-3-2 (30min)
- exercise-c
- make product card
- imitate this [card example](https://bootsnipp.com/snippets/3x5mD)
  - apply to xyz website -->

# lecture 1-4 (10min)

# lunch

# lecture 1-5 (30-45min)

# Flexbox - DEMO

- what is flexbox?
- Flexible Box Module - one dimensional layout system
  - deals with layout one dimension at a time
- justify-content, align-items, flex-wrap
- present use case
  - nav
- flexbox practice
  - [flexboxfroggy](https://flexboxfroggy.com/)
  - [flexbox zombie](https://flexboxzombies.com/p/flexbox-zombies)
- guide

  - [flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

  <!-- # workshop 1-5-1 (45-60 min)
  - exercise-d
  - flexbox practice
    - [flexboxfroggy](https://flexboxfroggy.com/)
  - make 3x2 grid of product cards
  - modify nav -->

<!-- # workshop 1-6 (rest of day)
  - exercise-e
  - style cart page to spec -->

# CSS Day 2

# Review (15min)

- flexbox

# Multiple Column Layout

```CSS
div {
  column: 250px 3;
}
```

<!-- # workshop 1-4 (15min)

- exercise-f
- make splash screen in index html with 2 cols and welcome -->

# lecture 2-1 (30 min)

# Opacity / Filter

- z-index

# SVG

- fill
- vector vs raster

# workshop 2-1 (15 min)

- add footer content and footer svg to xyz

# Pseudo Classes - DEMO

- a:hover
  - '>' change child
  - '~' change sibling
- input:focus
- use form to demo pseudo classes

# Pseudo Elements - DEMO

- ::selection
- ::before
- ::after

# CSS Grid - DEMO

- 2 dimensional layout system
- allows for rows and columns to be
- present use case
- https://css-tricks.com/snippets/css/complete-guide-grid/
  - share with class
- https://gridbyexample.com/

# CSS Grid and Flexbox Combo - DEMO

- use etsy.com product home page as example

# workshop (1 hr)

- copy https://erdensen.com/

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
- Wireframe - Figma/hand drawn
- limit colors
- limit typography
- css sandbox
  - csszengarden.com
- https://htmlcheatsheet.com/css/

# Responsive Design

- media queries

# weekend hw

- vacation page
  - 3 wireframes
  - 1 mockup
  - gallery mosaic
  - nav
  - profile

# Cheatsheet

- https://htmlcheatsheet.com/css/
