//to get all records we can pass 'test OR 1=1' in the name or code query
//to rewrite the function :

const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

const execQuery = util.promisify(connection.query.bind(connection));
const getPopulation = async (Country, name, code, cb) => {
  try {
    const result = await Promise.all([
      execQuery(
        `PREPARE stmt FROM 'SELECT Population FROM ${Country} WHERE Name = ? and code = ?'`
      ),
      execQuery(`SET @name ='${name}'`),
      execQuery(`SET @code ='${code}'`),
      execQuery(`EXECUTE stmt USING @name, @code; `),
    ]);
    if (result.length == 0) {
      cb(new Error("Not found"));
    }
    console.log(result[3]);
    connection.end();
  } catch (err) {
    console.log(err.message);
  }
};
getPopulation("Country", "Syria", "SYR", console.log);
