var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3001;

// app.use(bodyParser.json());
// app.use(cors);
// app.use(bodyParser.urlencoded({ extended: false }));

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

var express = require("express");
var router = express.Router();
var movies = [
  { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
  { id: 102, name: "Inception", year: 2010, rating: 8.7 },
  { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
  { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 }
];

//Routes will go here
module.exports = router;

router.get("/", function(req, res) {
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
