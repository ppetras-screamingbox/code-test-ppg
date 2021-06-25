export const makeCleanser = () => {
  const shouldSkip = (value) => {
    return (typeof value === 'undefined' || value === null)
  }
  
  const cleanseArray = (input) => {
    if (!Array.isArray(input)) {
      throw new Error('cleansArray() expects array as input parameter')
    }
    return input.map((item) => cleanse(item)).filter((item) => !shouldSkip(item))
  }
  
  const cleanseObject = (input) => {
    if (typeof input !== 'object' || Array.isArray(input)) {
      throw new Error('cleanseObject() expects plain object as input parameter')
    }
    const result = {}
    for (const [key, value] of Object.entries(input)) {
      if (shouldSkip(value)) {
        continue
      }
      result[key] = cleanse(value)
    }
    return result
  }
  
  const cleanse = (input) => {
    if (shouldSkip(input)) {
      return undefined
    }
    if (Array.isArray(input)) {
      return cleanseArray(input)
    }
    if (typeof input === 'object') {
      return cleanseObject(input)
    }
    return input
  }

  return Object.freeze({
    cleanse,
  })
}