export const makeApp = async (utils) => {
  const run = (input) => {
    const { logger, cleanser } = utils
    logger.log(cleanser.cleanse(input))
  }

  return Object.freeze({
    run,
  })
}