const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const availableTimes = "10:00, 11:00, 12:00";

app.get('/times', (req, res) => {
  res.json({ availableTimes });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
