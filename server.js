var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3001;

var db = require("./database/db");

app.get("/", function(req, res) {
  const select = "SELECT * FROM MoodFeatures";
  const params = [];
  db.all(select, params, function(err, rows) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ rows });
  });
  console.log("Sent list of items");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
