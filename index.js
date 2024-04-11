const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

const notes = [];

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.get("/notes", (req, res) => {
  const limit = Number(req.query.limit || "10");

  return res.json(notes.slice(0, limit));
});

app.post("/notes", (req, res) => {
  const body = req.body;
  console.log(req.query);
  console.log(body);
  const response = {
    ...body,
    id: Math.round(Math.random() * 10000),
    date: new Date().toDateString(),
  };

  notes.push(response);

  return res.json(response);
});

app.delete("/notes/:id", (req, res) => {
  // use the id to delete a note from the array;
  const id = Number(req.params.id);

  // Find which position has an id of id
  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(400).json({ message: "ID does not exist" });
  }

  // remove that from array
  notes.splice(index, 1);

  return res.json(notes);
});

const arr = ["Ryan", "Nathan", "Joe", "Luke"];
const name = "Nathans";

const findName = arr.findIndex((value) => value === name);
