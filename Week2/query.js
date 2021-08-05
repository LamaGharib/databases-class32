const CREATE_TABLE_AUTHORS = `CREATE TABLE authors (author_no INT PRIMARY KEY AUTO_INCREMENT ,
    author_name VARCHAR(50), university VARCHAR(50), date_of_birth DATE, h_index INT,gender VARCHAR(10))`;

const ADD_MENTOR_COLUMN = `ALTER TABLE authors ADD mentor INT, ADD CONSTRAINT FOREIGN KEY(mentor) REFERENCES authors(author_no)`;

const CREATE_TABLE_RESEARCH_PAPERS = `CREATE TABLE research_papers (paper_id INT PRIMARY KEY AUTO_INCREMENT, paper_title VARCHAR(100), conference VARCHAR(100), publish_date DATE)`;

const CREATE_JUNCTION_TABLE = `CREATE TABLE junction (author_no INT , paper_id INT,CONSTRAINT  author_paper PRIMARY KEY (author_no,paper_id), CONSTRAINT FOREIGN KEY (paper_id) REFERENCES research_papers(paper_id), CONSTRAINT FOREIGN KEY (author_no) REFERENCES authors(author_no))`;

const AUTHORS_AND_THERE_MENTORS = `SELECT a.author_name, b.author_name as mentor FROM authors AS a JOIN authors b ON a.mentor = b.author_no `;

const AUTHORS_INFORMATION_AND_PAPERS_TITLE = `SELECT a.* ,b.paper_title FROM authors AS a LEFT JOIN  junction ON a.author_no = junction.author_no LEFT JOIN research_papers AS b ON junction.paper_id = b.paper_id`;

const RESEARCHES_AND_NUMBER_OF_AUTHORS = `SELECT a.paper_title, count(author_no) AS num_of_authors FROM research_papers AS a LEFT JOIN junction as b ON a.paper_id = b.paper_id GROUP BY paper_title `;

const NUMBER_of_papers_written_by_females = `SELECT COUNT(paper_id) AS papers_written_by_females FROM authors AS a JOIN junction AS b ON a.author_no = b.author_no WHERE gender = "f"`;

const average_index_by_university = `SELECT university, AVG(h_index) FROM authors GROUP BY university`;

const PAPERS_BY_UNIVERSITY = `SELECT university, COUNT(a.paper_id) FROM research_papers AS a LEFT JOIN junction ON a.paper_id = junction.paper_id LEFT JOIN authors AS b ON junction.author_no = b.author_no GROUP BY university`;

const MIN_MAX_INDEX_BY_UNIVERSITY = `SELECT university, min(h_index) , max(h_index)
FROM authors
GROUP BY university`;

module.exports = {
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
};
