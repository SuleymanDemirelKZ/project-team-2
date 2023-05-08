const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const availableTimes = "10:00, 11:00, 12:00, 13:00";

app.get('/times', (req, res) => {
  res.json({ availableTimes });
});

app.post('/createBooking', (req, res) => {
    const data = req.body;
  
    // Process the data here, e.g., save to a database or perform other operations
    
    res.json({ message: 'Data received successfully', receivedData: data });
    console.log(req)
  });

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
