require('dotenv').config();
const express = require('express');
const Tutorial = require('./models/tutorial');

const app = express();

app.use(express.json());

/* Get all tutorials */
app.get('/api/tutorials', (req, res) => {
    Tutorial.find({}).then(tutorial => {
      res.json(tutorial);
    })
  });

/* Get tutorial by id */
app.get('/api/tutorials/:id', (req, res) => {
    Tutorial.findById(req.params.id)
    .then(tutorial => tutorial ? res.json(tutorial) : res.status(404).end())
    .catch(err => {
        console.log(err);
        res.status(400).send({error: 'Malformatted Id...'});
    })
});

/* Add new tutorial */
app.post('/api/tutorials', (req, res) => {
    const { name = undefined, published = false } = req.body;
    const tutorial = new Tutorial({
        name,
        published
    });
    tutorial.save().then(newTutorial => {
        res.json(newTutorial);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
})