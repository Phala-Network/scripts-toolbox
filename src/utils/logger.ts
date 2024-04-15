import pino from 'pino'

export const logger = pino({
  level: Bun.env.LOG_LEVEL,
  transport: {target: 'pino-pretty', options: {colorize: true}},
})
