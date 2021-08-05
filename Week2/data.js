const AUTHORS_DATA = [
  {
    author_name: "William Shakespeare",
    university: "Princeton University",
    date_of_birth: "1921-10-21",
    h_index: "300",
    gender: "m",
  },
  {
    author_name: "Agatha Christie",
    university: "Harvard University",
    date_of_birth: "1923-09-27",
    h_index: "144",
    gender: "m",
    mentor: 1,
  },
  {
    author_name: "Barbara Cartland",
    university: "Yale University",
    date_of_birth: "1924-12-17",
    h_index: "255",
    gender: "m",
    mentor: 1,
  },
  {
    author_name: "Danielle Steel",
    university: "The University of Chicago",
    date_of_birth: "1926-07-02",
    h_index: "155",
    gender: "m",
    mentor: 3,
  },
  {
    author_name: "Harold Robbins",
    university: "University of California, Berkeley",
    date_of_birth: "1932-12-14",
    h_index: "255",
    gender: "m",
    mentor: 2,
  },
  {
    author_name: "Georges Simenon",
    university: "Harvard University",
    date_of_birth: "1937-10-28",
    h_index: "231",
    gender: "m",
    mentor: 1,
  },
  {
    author_name: "Enid Blyton",
    university: "Johns Hopkins University",
    date_of_birth: "1942-10-31",
    h_index: "245",
    gender: "m",
    mentor: 4,
  },
  {
    author_name: "Sidney Sheldon",
    university: "University of California, Berkeley",
    date_of_birth: "1969-02-07",
    h_index: "144",
    gender: "f",
    mentor: 5,
  },
  {
    author_name: "J. K. Rowling",
    university: "ETH Zurich",
    date_of_birth: "1984-08-12",
    h_index: "220",
    gender: "f",
    mentor: 3,
  },
  {
    author_name: "Gilbert Patten",
    university: "UCL",
    date_of_birth: "1989-01-23",
    h_index: "230",
    gender: "f",
    mentor: 2,
  },
  {
    author_name: "Dr. Seuss",
    university: "University of Toronto",
    date_of_birth: "1991-09-20",
    h_index: "150",
    gender: "f",
    mentor: 5,
  },
  {
    author_name: "Eiichiro Oda",
    university: "University of Toronto",
    date_of_birth: "1995-05-01",
    h_index: "130",
    gender: "f",
    mentor: 7,
  },
  {
    author_name: "Leo Tolstoy",
    university: "Duke University",
    date_of_birth: "1969-02-07",
    h_index: "289",
    gender: "f",
    mentor: 4,
  },
  {
    author_name: "Corín Tellado",
    university: "Duke University",
    date_of_birth: "1984-08-12",
    h_index: "278",
    gender: "f",
    mentor: 4,
  },
  {
    author_name: "Jackie Collins",
    university: "Princeton University",
    date_of_birth: "1991-09-20",
    h_index: "265",
    gender: "f",
    mentor: 10,
  },
];
const RESEARCH_DATA = [
  {
    paper_title:
      "Are teens who spend more time on social media more likely to suffer anxiety and/or depression?",
    conference: "SODA",
    publish_date: "1973-04-12",
  },
  {
    paper_title: "How will the loss of net neutrality affect internet users",
    conference: "SODA",
    publish_date: "1966-07-05",
  },
  {
    paper_title: "Analyze the history and progress of self-driving vehicles",
    conference: "SODA",
    publish_date: "1966-07-05",
  },
  {
    paper_title:
      "How has the use of drones changed surveillance and warfare methods?",
    conference: "SODA",
    publish_date: "1966-07-05",
  },
  {
    paper_title: "Has social media made people more or less connected?",
    conference: "CIDR",
    publish_date: "1985-05-26",
  },
  {
    paper_title:
      "What progress has currently been made with artificial intelligence?",
    conference: "CIDR",
    publish_date: "1985-05-26",
  },
  {
    paper_title: "Do smartphones increase or decrease workplace productivity?",
    conference: "CIDR",
    publish_date: "1985-05-26",
  },
  {
    paper_title:
      "What are the most effective ways to use technology in the classroom?",
    conference: "ICSE",
    publish_date: "2001-05-31",
  },
  {
    paper_title: "How is Google search affecting our intelligence?",
    conference: "ICSE",
    publish_date: "2001-05-31",
  },
  {
    paper_title:
      "When is the best age for a child to begin owning a smartphone?",
    conference: "ICSE",
    publish_date: "2001-05-31",
  },
  {
    paper_title: "Has frequent texting reduced teen literacy rates?",
    conference: "PODS",
    publish_date: "2010-05-13",
  },
  {
    paper_title: "How are black holes created?",
    conference: "PODS",
    publish_date: "2010-05-13",
  },
  {
    paper_title: "What impact has climate change had on coral reefs?",
    conference: "PODS",
    publish_date: "2010-05-13",
  },
  {
    paper_title:
      "What can be done to save amphibian species currently at risk of extinction?",
    conference: "VLDB",
    publish_date: "1977-10-03",
  },
  {
    paper_title: "Should the US rely on nuclear energy more?",
    conference: "VLDB",
    publish_date: "1977-10-03",
  },
  {
    paper_title:
      "Does ecotourism actually have a positive impact on the environment?",
    conference: "VLDB",
    publish_date: "1977-10-03",
  },
  {
    paper_title: "How can we improve access to clean water around the world?",
    conference: "ECML-PKDD",
    publish_date: "1997-11-16",
  },
  {
    paper_title: "What have NASA's biggest successes and failures been?",
    conference: "ECML-PKDD",
    publish_date: "1997-11-16",
  },
  {
    paper_title: "What impact has the Paris Climate Agreement had so far?",
    conference: "ECML-PKDD",
    publish_date: "1997-11-16",
  },
  {
    paper_title: "What are the pros and cons of fracking?",
    conference: "DEXA",
    publish_date: "2008-06-29",
  },
  {
    paper_title:
      "How has the Flint water crisis changed water regulation safety?",
    conference: "DEXA",
    publish_date: "2008-06-29",
  },
  {
    paper_title:
      "How have past oil spills changed regulations and cleanup methods?",
    conference: "DEXA",
    publish_date: "2008-06-29",
  },
  {
    paper_title:
      "Analyze deforestation rates in a certain area or globally over a period of time.",
    conference: "ISWC",
    publish_date: "2019-09-04",
  },
  {
    paper_title: "How has the earth's climate changed in the past few decades?",
    conference: "ISWC",
    publish_date: "2019-09-04",
  },
  {
    paper_title: "What was the impact of the No Child Left Behind act?",
    conference: "ISWC",
    publish_date: "2019-09-04",
  },
  {
    paper_title:
      "Which methods are most effective at reducing bullying in schools?",
    conference: "ASONAM",
    publish_date: "2013-01-04",
  },
  {
    paper_title:
      "Does offering tenure increase or decrease quality of teaching?",
    conference: "ASONAM",
    publish_date: "2013-01-04",
  },
  {
    paper_title: "Should graduate students be able to form unions?",
    conference: "ASONAM",
    publish_date: "2013-01-04",
  },
  {
    paper_title:
      "How has the Trump presidency changed international relations?",
    conference: "The Web Conference",
    publish_date: "2004-11-04",
  },
  {
    paper_title: "How have the goals of feminists changed over the decades?",
    conference: "The Web Conference",
    publish_date: "2004-11-04",
  },
];

const JUNCTION_DATA = [
  { author_no: "3", paper_id: "1" },
  { author_no: "3", paper_id: "2" },
  { author_no: "1", paper_id: "3" },
  { author_no: "1", paper_id: "4" },
  { author_no: "5", paper_id: "5" },
  { author_no: "5", paper_id: "6" },
  { author_no: "5", paper_id: "7" },
  { author_no: "7", paper_id: "8" },
  { author_no: "7", paper_id: "9" },
  { author_no: "2", paper_id: "10" },
  { author_no: "2", paper_id: "11" },
  { author_no: "8", paper_id: "12" },
  { author_no: "8", paper_id: "13" },
  { author_no: "12", paper_id: "14" },
  { author_no: "12", paper_id: "15" },
  { author_no: "12", paper_id: "16" },
  { author_no: "4", paper_id: "17" },
  { author_no: "9", paper_id: "18" },
  { author_no: "13", paper_id: "19" },
  { author_no: "15", paper_id: "20" },
  { author_no: "1", paper_id: "21" },
  { author_no: "4", paper_id: "22" },
  { author_no: "4", paper_id: "23" },
  { author_no: "14", paper_id: "24" },
  { author_no: "15", paper_id: "25" },
  { author_no: "15", paper_id: "26" },
  { author_no: "10", paper_id: "27" },
  { author_no: "9", paper_id: "28" },
  { author_no: "10", paper_id: "29" },
  { author_no: "9", paper_id: "30" },
];

module.exports = { AUTHORS_DATA, RESEARCH_DATA, JUNCTION_DATA };
