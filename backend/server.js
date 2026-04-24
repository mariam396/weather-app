const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.WEATHER_API_KEY;

app.post("/api/weather", async (req, res) => {
  const { location } = req.body;

  try {
    if (!location) throw new Error("No location provided");

    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${API_KEY}&units=metric`
    );

    const forecastRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&appid=${API_KEY}&units=metric`
    );

    const daily = forecastRes.data.list.filter((item, index) => index % 8 === 0);

    res.json({ weather: weatherRes.data, forecast: daily });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(400).json({ error: "City not found or API error." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));