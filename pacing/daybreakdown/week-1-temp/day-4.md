# terminal: 35 mins

- what is the terminal
- various commands

```
~
pwd
cd (relative vs absolute paths with /)
mkdir
rmdir
touch
rm (-r -f)
ls
ls -la
```

## git and github: 25-30 mins

- what is git?
- various commands

```
git init
git status
```

touch file
git add <filename>

/// multiple files

git add .

untracked files

git commit
git push to repo

git config --global --edit (MAKE SURE THIS IS SETUP with CLASS)

- create repository on github (explain repo and different options)
- git remote add origin (links to repo)
- if first time RSA key

### break 10 mins

## commands: 10 mins

- command z (undo)
- command c (copy)
- command v (paste)
- shift command z (redo)
- command p (go to file)
- tab (indent)
- shift tab (indent backwards)
- select tab (indent selected)
- shift command f (find in project)
- control ` (show terminal / hide terminal)

## CSS Animation: 15 mins

## Responsive Design (media queries): 15 mins

## layout CSS Grid: 30mins

- TODO: watch mike s grid video to get quick dump of concepts

flexbox is 1 dimensional

left to right or
top to down

css grid is 2 dimensional

left to right and up and down at the same time.

https://css-tricks.com/snippets/css/complete-guide-grid/

// a bit complex

// dont have to use

// left is on container
// right is on individual elements

// like flexbox!

// display flex goes on containing element
// effects only direct children

// right side is specific to elements

// most stuff will happen on containing element

unlike flexbox display:grid; doesn't do anything (at first)

grid-template-columns - 1fr vs px - grid-row-gap - grid-column-gap (space between columns)

grid-template-areas: - quotes of layout

    "header header header header header header header header"
    "sidebar sidebar main main main main main main"
    "sidebar sidebar footer footer footer footer footer footer"

grid-area;

main, header, footer, aside {
min-height: 100px;
}

main {
grid-area: main;
background: green;
}

aside {
grid-area: sidebar;
background: black;
}

footer {
grid-area: footer;
background: red;
}

header {
grid-area: header;
background: purple;
}

- talk about how you'd do it with flexbox

## break: 10 mins

## review: 30 mins

- html
- css
- github
- box model

## 2 min

- paretto principle (80% 20%)

## images: regular vs background: 10 mins

- talk about width
- background images...

## total lecture time: 160 mins

## ASSIGN (due on Monday)

https://github.com/punchcode-fullstack/4-CSS-sk8er-site
