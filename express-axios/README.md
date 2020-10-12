# axios express and mysql

## express definitions

### retrive information from post request

`req.body`

### retriving query strings and query parameters

#### query string example

- incoming get request: my-url-path?name=foo

`router.get('/my-url-path', (req, res, next) => { const name = req.query.name res.json() })`

#### query param example

- incoming get request: my-url-path/1

`router.get('/my-url-path/:id', (req, res, next) => {
const name = req.params.id

res.json()
})`

Example of query string and params below:

## crud operations:

### creating a resource

## CREATE:

### axios: (post request)

`axios.post('api/some-url-path', obj)`

### express: (listening to post request)

`router.post('/some-url-path', (req, res, next) => { const objectSentFromPost = req.body res.json() })`

## READ:

### axios: (get request)

`axios.get('api/some-get-path')`

### express: (listening to get request)

`router.get('/some-get-path', (req, res, next) => { res.send() })`

## UPDATE:

### axios: (patch request)

`axios.patch('api/some-patch-path', objectToPatch)`

### express: (listening to patch request)

`router.patch('/some-patch-path', (req, res, next) => { const objectSentFromPost = req.body res.send() })`

## DELETE:

### axios: (delete request - passing id...)

`axios.delete('api/some-delete-path/1')`

### express: (listening to delete request)

`router.delete('/some-delete-path/:id', (req, res, next) => { const idOfThingToDelete = req.params.id // SQL code HERE res.send() })`
