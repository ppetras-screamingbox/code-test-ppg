import util from 'util'

export const makeLogger = () => {
  const log = (value) => {
    console.log(util.inspect(value, { showHidden: false, depth: null }))
  }

  return Object.freeze({
    log,
  })
}