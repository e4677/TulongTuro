import supabase from '../config/supabaseClient.js';

export const renderHomepage = async (req, res) => {
  res.render('index', { user: req.user });
};

export const getSubjects = async (req, res) => {
  // res.render('signup');
};

export const renderCreation = async (req, res) => {
  res.render('create', { user: req.user });
};

export const createLesson = async (req, res) => {
  const { authorId, title, content, subjectSlug } = req.body;

  const { data, error } = await supabase
  .from('lessons')
  .insert([
    { author_id: authorId, title: title, content: content, subject_slug: subjectSlug },
  ])
  .select();

  if (error) {
    console.error('Error creating lesson:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to create lesson.',
      error: error.message,
    });
  }

  const lessonId = data[0].id;

  res.status(200).json({
    success: true,
    message: 'Lesson created successfully.',
    lesson: data[0],
    redirect: `/view/${lessonId}`,
  });  
};

export const renderSubject = async (req, res) => {
  const subjectSlug = req.params.subject;
  const subjectTitle = subjectSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  res.render('subject', { subjectTitle });
};

export const getLessons = async (req, res) => {

};

export const renderLesson = async (req, res) => {
  const lessonId = req.params.lessonId;

  const { data: lesson, error } = await supabase
    .from('lessons')
    .select("*")
    .eq('id', lessonId)
    .single();

  if (error) {
    console.error('Error fetching lesson:', error.message);
    return res.status(500).render('error', {
      message: 'An error occurred while retrieving the lesson.',
      error: error.message,
    });
  }

  if (!lesson) {
    return res.status(404).render('error', {
      message: 'Lesson not found.',
      error: `No lesson with ID ${lessonId}`,
    });
  }

  res.render('lesson', { lesson });
};

export const getLessonContent = async (req, res) => {

};
