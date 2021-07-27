const mysql = require("mysql");
const query = require("./world_query.js");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});
connection.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("connected...");
});

const connection_query = (con) => {
  connection.query(con, (err, results) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(results);
  });
};

connection_query(query.countriesPopulationGreaterThan8000000);
connection_query(query.countriesHasLAND);
connection_query(query.citiesPopulationBetween500000And1000000);
connection_query(query.countriesOnTheContinentEurope);
connection_query(query.countriesListedBySurfaceArea);
connection_query(query.citiesInTheNetherlands);
connection_query(query.populationOfRotterdam);
connection_query(query.tenBiggestCountriesBySurfaceArea);
connection_query(query.tenMostPopulatedCities);
connection_query(query.populationOfTheWorld);
connection.end();
