const mysql = require("mysql");
const util = require("util");

const {
  CREATE_TABLE_AUTHORS,
  ADD_MENTOR_COLUMN,
  CREATE_TABLE_RESEARCH_PAPERS,
  CREATE_JUNCTION_TABLE,
  AUTHORS_AND_THERE_MENTORS,
  AUTHORS_INFORMATION_AND_PAPERS_TITLE,
  RESEARCHES_AND_NUMBER_OF_AUTHORS,
  NUMBER_of_papers_written_by_females,
  average_index_by_university,
  PAPERS_BY_UNIVERSITY,
  MIN_MAX_INDEX_BY_UNIVERSITY,
} = require("./query");

const { AUTHORS_DATA, RESEARCH_DATA, JUNCTION_DATA } = require("./data");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
};

const connection = mysql.createConnection(CONNECTION_CONFIG);
const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  try {
    await Promise.all([
      (execQuery(CREATE_TABLE_AUTHORS),
      execQuery(CREATE_TABLE_RESEARCH_PAPERS)),
      execQuery(ADD_MENTOR_COLUMN),
      execQuery(CREATE_JUNCTION_TABLE),
    ]);

    await Promise.all([
      AUTHORS_DATA.map((author) =>
        execQuery("INSERT INTO authors SET ?", author)
      ),
      RESEARCH_DATA.map((research) =>
        execQuery("INSERT INTO research_papers SET ?", research)
      ),
      JUNCTION_DATA.map((junction) =>
        execQuery("INSERT INTO junction set ?", junction)
      ),
    ]);

    const exe3_4 = await Promise.all([
      execQuery(AUTHORS_AND_THERE_MENTORS),
      execQuery(AUTHORS_INFORMATION_AND_PAPERS_TITLE),
      execQuery(RESEARCHES_AND_NUMBER_OF_AUTHORS),
      execQuery(NUMBER_of_papers_written_by_females),
      execQuery(average_index_by_university),
      execQuery(PAPERS_BY_UNIVERSITY),
      execQuery(MIN_MAX_INDEX_BY_UNIVERSITY),
    ]);
    console.log(exe3_4);
  } catch (error) {
    console.log(error.message);
  }
};
seedDatabase();
