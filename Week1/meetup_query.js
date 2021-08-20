const create_database = "CREATE DATABASE meetup";
const drop_database = "DROP DATABASE meetup";
const create_table_Invitee = `CREATE TABLE meetup.Invitee(invitee_no INT PRIMARY KEY AUTO_INCREMENT, invitee_name VARCHAR(50),invited_by VARCHAR(50))`;
const create_table_Room = `CREATE TABLE meetup.Room(room_no INT PRIMARY KEY AUTO_INCREMENT, room_name VARCHAR(50), floor_number INT)`;
const create_table_Meeting = `CREATE TABLE meetup.Meeting(meeting_no INT PRIMARY KEY AUTO_INCREMENT, meeting_title VARCHAR(50), starting_time DATETIME DEFAULT CURRENT_TIMESTAMP, ending_time DATETIME DEFAULT CURRENT_TIMESTAMP, room_no INT, FOREIGN KEY(room_no) REFERENCES Room(room_no))`;
const populate_invitee = `INSERT INTO meetup.Invitee (invitee_name,invited_by)
VALUES ('John doe','Sam Smith'), ('Jane doe','Sam Smith'), ('Jimmy Doe','Sam Smith'), ('Jenny Doe','Sam Smith'), ('July Doe','Sam Smith')`;
const populate_room = `INSERT INTO meetup.Room(room_name,floor_number)
VALUES ('A',3), ('B',2), ('C',6), ('D',3), ('E',5)`;
const populate_meeting = `INSERT INTO meetup.Meeting(meeting_title, room_no)
VALUES ('interview',3), ('new tasks',2), ('interview',5), ('changing department',3), ('secund interview',5)`;

module.exports = {
  drop_database,
  create_database,
  create_table_Invitee,
  create_table_Room,
  create_table_Meeting,
  populate_invitee,
  populate_room,
  populate_meeting,
};
