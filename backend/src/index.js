import express from 'express';
import morgan from 'morgan'
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser"
import cors from 'cors'

import routerAuth from './routes/auth.routes.js';
import taskRouter from './routes/task.routes.js';

import swaggerSpec from './SwaggerConfig.js';
import swaggerUI from 'swagger-ui-express'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/', routerAuth)
app.use('/api/', taskRouter)
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerSpec) )

connectDB()
app.listen(4000)
console.log("Server:", 4000); 