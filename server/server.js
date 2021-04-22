const express = require("express");
const app = express();
const PORT = 8000 || process.env.PORT;
const cors = require("cors");

const { races, subRaces } = require("./data/races");

app.use(express.json());
app.use(cors());

app.get("/races", (req, res) => {
  if (!req.query.name) {
    res.json(races);
  } else {
    for (const race of races) {
      if (race.name.toLowerCase() === req.query.name.toLowerCase()) {
        res.json(race);
      }
    }
  }
})

app.get("/races/:id", (req, res) => {
  res.json(races[req.params.id - 1])
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});