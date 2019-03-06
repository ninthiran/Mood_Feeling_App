const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(
  "./database/moodinsights.sqlite3",
  sqlite3.OPEN_READWRITE,
  err => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      console.log("Connected to the moodinsights database.");
      db.run(
        "CREATE TABLE MoodFeatures ( Entry_ID   VARCHAR (25)  PRIMARY KEY UNIQUE, mood_range INTEGER (2)   NOT NULL, depressed  BOOLEAN       NOT NULL DEFAULT (0), optimistic BOOLEAN       NOT NULL DEFAULT (0), bored      BOOLEAN       NOT NULL DEFAULT (0), happy      BOOLEAN       NOT NULL DEFAULT (0), comments   VARCHAR (250) NOT NULL DEFAULT (0), time   TIME    DEFAULT (CURRENT_TIMESTAMP)  );",
        err => {
          console.log("Table already created");
        }
      );
    }
  }
);

module.exports = db;
