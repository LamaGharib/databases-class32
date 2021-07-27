const countriesPopulationGreaterThan8000000 = `SELECT name FROM country WHERE population > 8000000`;
const countriesHasLAND = `SELECT name FROM county WHERE name LIKE '%land%'`;
const citiesPopulationBetween500000And1000000 = `SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000`;
const countriesOnTheContinentEurope = `SELECT name FROM country WHERE continent = 'Europe' `;
const countriesListedBySurfaceArea = `SELECT name FROM country ORDER BY SurfaceArea DESC`;
const citiesInTheNetherlands = `SELECT name FROM city WHERE countryCode = 'NLD'`;
const populationOfRotterdam = `SELECT population FROM city WHERE name = 'Rotterdam'`;
const tenBiggestCountriesBySurfaceArea = `SELECT name FROM country ORDER BY surfaceArea DESC LIMIT 10`;
const tenMostPopulatedCities = `SELECT name FROM city ORDER BY population DESC LIMIT 10`;
const populationOfTheWorld = `SELECT SUM (population) AS 'TOTAL_POPULATION' FROM country`;
module.exports = {
  countriesPopulationGreaterThan8000000,
  countriesHasLAND,
  citiesPopulationBetween500000And1000000,
  countriesOnTheContinentEurope,
  countriesListedBySurfaceArea,
  citiesInTheNetherlands,
  populationOfRotterdam,
  tenBiggestCountriesBySurfaceArea,
  tenMostPopulatedCities,
  populationOfTheWorld,
};
