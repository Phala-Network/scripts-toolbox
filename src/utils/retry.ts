import {setTimeout} from 'node:timers/promises'
import {logger} from './logger'

interface RetryOptions {
  interval?: number
  maximumTimes?: number
}
export const retry = async <T>(
  fn: () => Promise<T>,
  options?: RetryOptions,
): Promise<T> => {
  const {interval = 3000, maximumTimes = Number.POSITIVE_INFINITY} =
    options ?? {}
  let attempts = 0

  while (true) {
    try {
      return await fn()
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Unknown error'
      logger.error(message)
      logger(`Attempt ${attempts + 1} failed`)

      attempts++
      if (attempts >= maximumTimes) {
        throw e
      }

      await setTimeout(interval)
    }
  }
}
