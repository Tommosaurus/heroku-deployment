const express = require("express");
const app = express();
const PORT = 5000;
const favouriteNumber = process.env.FAVOURITE_NUMBER;

app
  .get("/", (_, res) => {
    res.json({
      success: true,
      message: `Server is up and running! The favourite number is ${favouriteNumber}`,
    });
  })
  .listen(process.env.PORT || 5000, () => console.log(`Server is running on port ${PORT}`));