const mysql = require("mysql");
const query = require("./meetup_query.js");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("connected...");
});

const connection_query = (con) => {
  connection.query(con, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
  });
};
connection_query(query.drop_database);
connection_query(query.create_database);
connection_query(query.create_table_Invitee);
connection_query(query.create_table_Room);
connection_query(query.create_table_Meeting);
connection_query(query.populate_invitee);
connection_query(query.populate_room);
connection_query(query.populate_meeting);

connection.end();
