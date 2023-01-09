import CONSTANTS from '../common/constants';
import winston from 'winston';

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === CONSTANTS.PRODUCTION ? CONSTANTS.LOG_ERROR : CONSTANTS.LOG_DEBUG,
    }),
    new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
  ],
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== CONSTANTS.PRODUCTION) {
  logger.debug('Logging initialized at debug level');
}

export default logger;
