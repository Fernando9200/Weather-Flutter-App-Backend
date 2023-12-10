require('dotenv').config();
const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Weather API is up and running");
});

// Handle the /weather route
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  try {
    const response = await axios.get(APIUrl);

    if (response.data.cod === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(404).json({ error: response.data.message || "City not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});