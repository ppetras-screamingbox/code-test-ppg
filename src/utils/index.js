import { makeCleanser } from './cleanser/index.js'
import { makeLogger } from './logger/index.js'

export const makeUtils = () => {
  return Object.freeze({
    cleanser: makeCleanser(),
    logger: makeLogger(),  
  })
}