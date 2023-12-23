import express from 'express';
import productRoutes from './routes/productRoutes.js';
import chalk from 'chalk';
import {
  timestampLogger,
  httpMethodLogger,
  urlLogger,
} from './middlewares/requestLoggerMiddleware.js';
import cors from "cors"

const port = process.env.PORT || 5000;

const app = express();

app.use(cors())

// Body parser Middleware
app.use(express.json());

// Middlewares to pass through each request
app.use(timestampLogger, httpMethodLogger, urlLogger);

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`\n🚀 ${chalk.green('App started on port')} ${chalk.green(port)}\n`);
  });