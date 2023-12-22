import chalk from 'chalk';

const timestampLogger = (req, res, next) => {
  console.log(`\n\n🟠 ${chalk.rgb(255, 153, 51)('Timestamp')}: ${chalk.rgb(255, 153, 51)(new Date().toISOString())}`);
  next();
};

const httpMethodLogger = (req, res, next) => {
  console.log(`⚪ ${chalk.white('HTTP Method')}: ${chalk.white(req.method)}`);
  next();
};

const urlLogger = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(`🟢 ${chalk.rgb(0, 128, 0)('Request URL')}: ${chalk.rgb(0, 128, 0)(url)}`);
  next();
};

export { timestampLogger, httpMethodLogger, urlLogger };
