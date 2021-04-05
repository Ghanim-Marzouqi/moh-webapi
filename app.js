const fs = require("fs");
const express = require("express");

// initialize app and set port
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let rowData = fs.readFileSync("data.json");
let data = JSON.parse(rowData);

// endpoints
app.get("/", (req, res) => {
  res.send("<h2>Welcome To Real Estate Oman Test API</h2>");
});

app.get("/data", (req, res) => {
  res.json({ data });
});

// serve app
app.listen(port, () => console.log(`Listening on port ${port}`));