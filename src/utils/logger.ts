import pino from 'pino'

export const logger = pino({
  level: Bun.env.LOG_LEVEL ?? 'info',
  transport: {target: 'pino-pretty', options: {colorize: true}},
})
