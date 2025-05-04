import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/userRouter.js';
import lessonRouter from './routes/lessonRouter.js';
import cookieParser from 'cookie-parser';
import chatRouter from './routes/chatRouter.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', userRouter);
app.use('/', lessonRouter);
app.use('/', chatRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
