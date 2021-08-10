const mysql = require("mysql");
const util = require("util");
const {
  CREATE_TABLE_ACCOUNT,
  CREATE_TABLE_ACCOUNT_CHANGES,
} = require("./transaction_create_tables");
const {
  ACCOUNT_DATA,
  ACCOUNT_CHANGES_DATA,
} = require("./transaction_insert_values");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

const execQuery = util.promisify(connection.query.bind(connection));
const seedDatabase = async () => {
  connection.connect();
  try {
    await Promise.all([
      execQuery(CREATE_TABLE_ACCOUNT),
      execQuery(CREATE_TABLE_ACCOUNT_CHANGES),
    ]);
    await Promise.all([
      ACCOUNT_DATA.map((account) =>
        execQuery(`INSERT INTO account SET ?`, account)
      ),
      ACCOUNT_CHANGES_DATA.map((account_changed) =>
        execQuery(`INSERT INTO account_changes SET ?`, account_changed)
      ),
    ]);
    await execQuery(`START TRANSACTION`);
    await Promise.all([
      execQuery(
        `UPDATE account SET balance = balance-1000 WHERE account_number = 101 `
      ),
      execQuery(
        `UPDATE account SET balance = balance+1000 WHERE account_number = 102 `
      ),
      execQuery(
        `INSERT INTO account_changes (account_number,amount,changed_date,remark) VALUES(101, -1000, '2021-08-07', 'transfer')`
      ),
      execQuery(
        `INSERT INTO account_changes (account_number,amount,changed_date,remark) VALUES(102, +1000, '2021-08-07', 'receive')`
      ),
    ]);
    await execQuery(`COMMIT`);
  } catch (error) {
    console.log(error.message);
    await execQuery(`ROLLBACK`);
    connection.end();
  }
  connection.end();
};
seedDatabase();
