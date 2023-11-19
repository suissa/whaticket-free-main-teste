import pino from "pino";
import prettifier from 'pino-pretty';

const logger = pino({
  prettyPrint: {
    ignore: "pid,hostname"
  }
},prettifier());

export { logger };
