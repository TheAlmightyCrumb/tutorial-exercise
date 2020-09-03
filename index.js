require('dotenv').config();
const express = require('express');
const Tutorial = require('./models/tutorial');

const app = express();

app.use(express.json());

/* Get all tutorials */
app.get('/api/tutorials', (req, res) => {
  Tutorial.find({}).then((tutorial) => {
    res.json(tutorial);
  });
});

/* Get tutorial by id */
app.get('/api/tutorials/:id', (req, res) => {
  Tutorial.findById(req.params.id)
    .then((tutorial) => (tutorial ? res.json(tutorial) : res.status(404).end()))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ error: 'Malformatted Id...' });
    });
});

/* Add new tutorial */
app.post('/api/tutorials', (req, res) => {
  const { name = undefined, published = false } = req.body;

  const tutorial = new Tutorial({ name, published });

  tutorial.save().then((newTutorial) => res.json(newTutorial));
});

/* Update tutorial by id */
app.put('/api/tutorials/:id', (req, res) => {
  const { name = undefined, published = false } = req.body;

  const tutorial = { name, published };

  Tutorial.findByIdAndUpdate(req.params.id, tutorial, { new: true })
    .then((updatedTutorial) => res.json(updatedTutorial))
    .catch((err) => {
        console.log(err);
        res.send('An error has occurred...');
    });
});

/* Remove tutorial by id */
app.delete('/api/tutorials/:id', (req, res) => {
    Tutorial.findByIdAndRemove(req.params.id)
    .then((removedTutorial) => res.status(204).send(`Tutorial: "${removedTutorial}" has been removed`).end())
    .catch((err) => {
        console.log(err);
        res.send('An error has occurred...');
    });
});

/* Remove all tutorials */
app.delete('/api/tutorials', (req, res) => {
    Tutorial.deleteMany({})
    .then(res.send('Cleared tutorials list'));
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
