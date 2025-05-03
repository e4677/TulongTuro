export const renderHomepage = async (req, res) => {
  res.render('index', { user: req.user });
};

export const getLessons = async (req, res) => {
  // res.render('signup');
};