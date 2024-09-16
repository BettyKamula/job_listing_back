import express from 'express';
import { ConnectDB } from './db';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = process.env.PORT;
app.listen(port, async () => {
  await ConnectDB();
  console.log(`Server is running at ${port}`);
});
