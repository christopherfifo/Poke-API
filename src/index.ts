import express from 'express';
import { auth } from "./middlewares/auth";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});