# Notes API

API to store, retrieve and delete notes.

Retrieve a list of all notes.

> GET /notes

Create a note.

> POST /notes

```json
{
  "title": "Note title",
  "note": "hello",
  "author": "Ryan"
}
```

Delete a note.

> DELETE /notes/:id

When we store an API, generate an ID and store the data.
