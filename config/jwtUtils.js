import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET, 
    { expiresIn: '1h' } 
  );
};

export const verifyJWT = (req, res, next) => {
  const token = req.cookies.auth_token; 

  if (!token) {
    return res.status(401).json({ message: "Authorization token missing." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next(); 
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

export const logout = (req, res) => {
  res.clearCookie('auth_token');
  return res.status(200).json({ message: 'Logged out successfully.' });
};
