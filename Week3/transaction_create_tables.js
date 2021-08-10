const CREATE_TABLE_ACCOUNT = `CREATE TABLE account (account_number INT PRIMARY KEY, balance INT)`;
const CREATE_TABLE_ACCOUNT_CHANGES = `CREATE TABLE account_changes (change_number INT PRIMARY KEY AUTO_INCREMENT, account_number INT, amount INT, changed_date DATE, remark VARCHAR(100), CONSTRAINT FOREIGN KEY (account_number) REFERENCES account(account_number))`;

module.exports = { CREATE_TABLE_ACCOUNT, CREATE_TABLE_ACCOUNT_CHANGES };
