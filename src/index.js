import express from 'express';
import { ConnectDB } from './db';
import usersRouter from './modules/users';

const app = express();
app.use(usersRouter);

const port = process.env.PORT;
app.listen(port, async () => {
  await ConnectDB();
  console.log(`Server is running at ${port}`);
});
