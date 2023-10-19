import express from 'express';
import morgan from 'morgan'
import routerAuth from './routes/auth.routes.js';

const app = express()

app.use(morgan('dev'))
app.use(express.json())


app.use('/api/', routerAuth)

export default app;
/* app.listen(4000)
console.log(4000); */