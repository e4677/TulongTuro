export const renderHomepage = async (req, res) => {
  res.render('index', { user: req.user });
};

export const renderCreation = async (req, res) => {
  res.render('create')
};

export const createLesson = async (req, res) => {

};

export const getLessons = async (req, res) => {
  // res.render('signup');
};
