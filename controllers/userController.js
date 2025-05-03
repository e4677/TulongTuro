import supabase from '../config/supabaseClient.js';
import { generateToken } from '../config/jwtUtils.js'; 

const COOKIE_AGE = 3600000;

export const renderLogin = async (req, res) => {
  res.render('login');
};

export const renderSignup = async (req, res) => {
  res.render('signup');
};

export const verifyLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ message: error.message });
    }

    const token = generateToken(data.user);

    res.cookie('auth_token', token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production', 
      maxAge: COOKIE_AGE,
    });

    return res.status(200).json({
      message: "Login successful.",
      user: data.user,
      session: data.session,
    });
  } catch (err) {
    console.error("Unexpected login error:", err);
    return res.status(500).json({ message: "An unexpected error occurred. Please try again." });
  }
};

export const registerUser = async (req, res) => {
  const { email, username, firstName, lastName, password } = req.body;

  if (!email || !username || !firstName || !lastName || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          firstName,
          lastName,
        },
      },
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const token = generateToken(data.user);

    res.cookie('auth_token', token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      maxAge: COOKIE_AGE,
    });

    return res.status(201).json({
      message: "User registered successfully.",
      user: data.user,
    });

  } catch (err) {
    console.error("Unexpected registration error:", err);
    return res.status(500).json({ message: "An unexpected error occurred. Please try again." });
  }
};
