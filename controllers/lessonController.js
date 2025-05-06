import supabase from "../config/supabaseClient.js";
import { marked } from "marked";
import { getUniqueSubjects, getSubscribedSubjects } from "./commonController.js";

function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

export const renderHomepage = async (req, res) => {
	try {
		const subjects = await getSubscribedSubjects(req.user.userId);

		if (!subjects || subjects.length === 0) {
			return res.status(404).render("index", {
				user: req.user,
				subjects: [],
				message: "No subjects found.",
			});
		}

		const greeting = getGreeting() + ', ' + req.user.firstName;

		res.render("index", { user: req.user, greeting, subjects });
	} catch (err) {
		console.error("Unexpected error while rendering homepage:", err);
		res.status(500).render("error", {
			message: "An unexpected error occurred. Please try again later.",
		});
	}
};

export const getSubjects = async (req, res) => {
	// res.render('signup');
};

export const renderCreation = async (req, res) => {
	const subjects = await getSubscribedSubjects(req.user.userId);
	res.render("create", { user: req.user, subjects });
};

export const createLesson = async (req, res) => {
	let { authorId, title, content, subjectSlug } = req.body;

	subjectSlug = subjectSlug
		.split(' ')
		.map(word => word.toLowerCase())
		.join('-');

	const { data, error } = await supabase
		.from("lessons")
		.insert([
			{
				author_id: authorId,
				title: title,
				content: content,
				subject_slug: subjectSlug,
			},
		])
		.select();

	if (error) {
		console.error("Error creating lesson:", error.message);
		return res.status(500).json({
			success: false,
			message: "Failed to create lesson.",
			error: error.message,
		});
	}

	const lessonId = data[0].id;

	res.status(200).json({
		success: true,
		message: "Lesson created successfully.",
		lesson: data[0],
		redirect: `/view/${lessonId}`,
	});
};

export const renderSubject = async (req, res) => {
	const subjectSlug = req.params.subject;

	const subjectTitle = subjectSlug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	try {
		const { data: lessons, error } = await supabase
			.from("lessons")
			.select("*, users(*)")
			.eq("subject_slug", subjectSlug);

		if (error) {
			console.error("Error fetching lessons:", error.message);
			return res
				.status(500)
				.render("error", {
					message: "Failed to load lessons. Please try again later.",
				});
		}

		if (!lessons || lessons.length === 0) {
			return res.status(404).render("subject", {
				subjectTitle,
				lessons: [],
				message: "No lessons found for this subject.",
			});
		}

		const subjects = await getSubscribedSubjects(req.user.userId);
		res.render("subject", { subjectTitle, subjectSlug, lessons, subjects });
	} catch (err) {
		console.error("Unexpected error:", err);
		res
			.status(500)
			.render("error", {
				message: "An unexpected error occurred. Please try again later.",
			});
	}
};

export const getLessons = async (req, res) => {};

export const renderLesson = async (req, res) => {
	const lessonId = req.params.lessonId;

	const { data: lesson, error } = await supabase
		.from("lessons")
		.select("*, users(*)")
		.eq("id", lessonId)
		.single();

	if (error) {
		console.error("Error fetching lesson:", error.message);
		return res.status(500).render("error", {
			message: "An error occurred while retrieving the lesson.",
			error: error.message,
		});
	}

	if (!lesson) {
		return res.status(404).render("error", {
			message: "Lesson not found.",
			error: `No lesson with ID ${lessonId}`,
		});
	}

	const subjectSlug = lesson.subject_slug;
	const subjectTitle = subjectSlug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	const content = marked(lesson.content);
	const subjects = await getSubscribedSubjects(req.user.userId);

	res.render("lesson", {
		lesson,
		content,
		subjectTitle,
		subjectSlug,
		subjects,
	});
};

export const renderSelection = async (req, res) => {
	const allSubjects = await getUniqueSubjects();
	const subscribed = await getSubscribedSubjects(req.user.userId);

	const subMap = new Set(subscribed.map(sub => sub.slug));

	const subjects = allSubjects.map(sub => {
		return {
			slug: sub.slug,
			title: sub.title,
			isSubscribed: subMap.has(sub.slug)
		}
	});

	res.render("add", { user: req.user, subjects });
};

export const getLessonContent = async (req, res) => {};
