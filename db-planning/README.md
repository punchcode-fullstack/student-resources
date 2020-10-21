# Database Normalization:

https://dev.to/adammc331/how-to-properly-design-a-database-part-1-2h6f

https://dev.to/adammc331/effective-database-design-part-2-2ben

https://dev.to/adammc331/effective-database-design-part-3-1113

https://dev.to/adammc331/effective-database-design-part-4-jbj

# Database relationships

- one to one relationship
- one to many relationship
  - is established with a foreign key on the "many" table
- many to many relationship
  - is established with a pivot table, also known as a junction table (a table with both foreign keys to both tables)

# Helpful phrasing to think about relationships

## one to one relationship example

A User has one Profile
A Profile has one User

## one to many relationship example

An Album has many Tracks
A Track has one (belongs to one) Album

### Album Table

| id  | title            | artist_id |
| --- | ---------------- | --------- |
| 1   | Thriller         | 1         |
| 2   | Back In Black    | 2         |
| 3   | Hotel California | 3         |

### Track Table

| id  | name          | album_id |
| --- | ------------- | -------- |
| 1   | Beat it       | 1        |
| 2   | Billie Jean   | 1        |
| 3   | Back in Black | 2        |
| 4   | Hells Bells   | 2        |

## many to many relationship example

A PlayList has many tracks
A Track has many (belongs to many) Playlists

### PlayList Table

| id  | name             |
| --- | ---------------- |
| 1   | My Funk Playlist |
| 2   | My Rock Playlist |
| 3   | Back in Black    |
| 4   | Hells Bells      |

### Track Table

| id  | name          | album_id |
| --- | ------------- | -------- |
| 1   | Beat it       | 1        |
| 2   | Billie Jean   | 1        |
| 3   | Back in Black | 2        |
| 4   | Hells Bells   | 2        |

### PlaylistsTracks Table

| playlist_id | track_id |
| ----------- | -------- |
| 1           | 1        |
| 1           | 2        |
| 2           | 4        |
| 2           | 3        |
