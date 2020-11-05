# cascade deletion to ensure when deleting a record, the other record that relies on the existence of it also deletes

```js
await conn.schema.createTable(`venues`, (table) => {
  table.increments('id')
  table.string('title', 50)
  table.text('desc')
  table.integer('location_id').unsigned()
  table.foreign('location_id').references('locations.id')
  table.enu('type', ['bar', 'restaurant', 'shop', 'experience'])
  table.string('link', 255)
})
await conn.schema.createTable(`galleries`, (table) => {
  table.increments('id')
  table.integer('venue_id').unsigned()
  // notice this onDelete cascade (the gallery record will delete as well when the venue is deleted)
  table.foreign('venue_id').references('venues.id').onDelete('cascade')
  table.string('image', 255)
})
```
