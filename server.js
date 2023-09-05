import express from 'express';
import router from './routes/index';

const app = express();
app.use(express.json());
app.use(router);

console.log(process.env.DB_HOST);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
