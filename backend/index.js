const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
