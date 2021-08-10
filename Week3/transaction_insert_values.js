const ACCOUNT_DATA = [
  {
    account_number: "101",
    balance: "5000",
  },
  {
    account_number: "102",
    balance: "7000",
  },
  {
    account_number: "103",
    balance: "2000",
  },
];
const ACCOUNT_CHANGES_DATA = [
  {
    account_number: "103",
    amount: "-100",
    changed_date: "2020-08-06",
  },
  {
    account_number: "101",
    amount: "200",
    changed_date: "2021-08-06",
  },
];

module.exports = { ACCOUNT_DATA, ACCOUNT_CHANGES_DATA };
