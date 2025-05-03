export const renderHomepage = async (req, res) => {
  res.render('index', { user: req.user });
};

export const getSubjects = async (req, res) => {
  // res.render('signup');
};

export const renderCreation = async (req, res) => {
  res.render('create')
};

export const createLesson = async (req, res) => {

};

export const renderSubject = async (req, res) => {
  // TK: to be replaced with actual subject title
  const subjectSlug = req.params.subject;
  const subjectTitle = subjectSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  res.render('subject', { subjectTitle });
};

export const getLessons = async (req, res) => {

};

