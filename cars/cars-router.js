const express = require("express");

const db = require("../data/connection");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve car by that ID" });
    });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json({ results: ids });
    })
    .catch(err => {
      res.status(500).json({ message: "Could not post car " + `${err}` });
    });
});

router.put('/:id', (req, res) => {
  db("cars")
  .update(req.params.id, req.body)
  .then(data => res.status(201).json(data))
  .catch(err => res.status(404).json({ message: 'Couldnt update', errorMessage: err.message }))
});

router.delete('/:id', (req, res) => {
  db('cars')
    .delete(req.params.id)
    .then(action => res.status(200).json({ message: 'Car deleted' }))
    .catch(err => res.status(404).json({ message: 'Cant delete car', errorMessage: err.message}))
});

module.exports = router;
