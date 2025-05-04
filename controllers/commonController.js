import supabase from '../config/supabaseClient.js';

export const getUniqueSubjects = async () => {
  const { data, error } = await supabase.rpc('get_unique_subjects');

  if (error) {
    console.error('Error fetching unique subjects:', error.message);
    return res.status(500).render('error', {
      message: 'Failed to load homepage subjects. Please try again later.'
    });
  }

  if (!data || data.length === 0) {
    return [];
  }

  const subjects = data.map(({ subject_slug: slug }) => {
    const title = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { slug, title };
  });

  return subjects;
};