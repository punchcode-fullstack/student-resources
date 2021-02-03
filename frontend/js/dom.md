# Visit this page and go to part two to find DOM stuff

https://javascript.info/


# grab a single element on the page (returns object)

```js
document.querySelector('some css selector')
```

# grab multiple elements on the page (returns array)

```js
document.querySelectorAll('some css selector)
```

# add event listener

```js
someElementGrabbed.addEventListener('name of event', someFunction)
```

# e (event object)

- information about the event that happened

```js
someElementGrabbed.addEventListener('name of event', function (e) {
    // e is an object with different properties (a browser event)
    // important ones to know
    // e.target (what element the event happened on)
    // e.preventDefault() prevents the default action from happening
    // like preventing a link from going somewhere or a form from refreshing the page
})
```

# Event delegation

- having a single listener apply to multiple elements rather than individual elements

```js
someElementLikeADivThatWrapsOverButtonsOrOtherElements.addEventListener('name of event', someFunction)
```


