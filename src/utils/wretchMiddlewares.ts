import {logger} from './logger'

export const logRequestMiddleware =
  (next: (url: string, options: RequestInit) => Promise<Response>) =>
  async (url: string, options: RequestInit) => {
    const method = options.method ?? 'GET' // Default to GET if no method is specified
    logger.info(`${method} ${url}`)
    if (options.body != null) {
      logger.info(JSON.stringify(options.body, null, 2))
    }
    return await next(url, options)
  }

export const logResponseMiddleware =
  (next: (url: string, options: RequestInit) => Promise<Response>) =>
  async (url: string, options: RequestInit) => {
    try {
      const response = await next(url, options)
      logger.info(JSON.stringify(response, null, 2))
      return response
    } catch (error) {
      logger.error(JSON.stringify(error, null, 2))
      throw error
    }
  }
