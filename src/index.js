import express from 'express';
import { ConnectDB } from './db';
import UsersRouter from './modules/users';
import JobsRouter from './modules/jobs';

const app = express();
app.use(express.json());
app.use(UsersRouter);
app.use(JobsRouter);

const port = process.env.PORT;
app.listen(port, async () => {
  await ConnectDB();
  console.log(`Server is running at ${port}`);
});
