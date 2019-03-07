var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var db = require("./database/db");

app.get("/users", (req, res) => {
  const select = "SELECT * FROM MoodFeatures";
  const params = [];
  db.all(select, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ rows });
  });
  console.log("Sent list of items");
});

app.post("/post", (req, res) => {
  const param = [
    req.body.moodRangeValue,
    req.body.depressed ? 1 : 0,
    req.body.optimistic ? 1 : 0,
    req.body.bored ? 1 : 0,
    req.body.happy ? 1 : 0,
    req.body.comments
  ];

  const insert = `INSERT INTO MoodFeatures ( mood_range, depressed, optimistic, bored, happy, comments ) 
                values ( ${param.join(",")} )`;

  console.log(insert);

  db.run(insert, err => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
  });
  return res.send("Received a POST HTTP method");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
