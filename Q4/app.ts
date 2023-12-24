import express, { Application } from 'express';
// import productRoutes from './routes/productRoutes.ts';
import productRoutes from './routes/productRoutes.js';
import chalk from 'chalk';
import {
  timestampLogger,
  httpMethodLogger,
  urlLogger,
} from './middlewares/requestLoggerMiddleware.js';
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const app : Application = express();

app.use(cors())

// Body parser Middleware
app.use(express.json());

// Middlewares to pass through each request
app.use(timestampLogger, httpMethodLogger, urlLogger);

app.use('/api/products', productRoutes);

const port: number = parseInt(process.env.PORT as string, 10);

app.listen(port, () => {
  console.log(`🚀 ${chalk.blue('Server started on')} ${chalk.green('port', port)} in ${chalk.red(process.env.NODE_ENV, 'mode')}`);
});

export default app;