const express = require("express");

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.static("."));

app.listen(PORT, err => {
  console.log(`Server listening on ${PORT}`);
});
