/**
 * Capitalizes a string.
 *
 * @param s - The string to be capitalized
 */
export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
/**
 * Returns a random number between two numbers.

 * @param min - Lower bound of the random number range
 * @param max - Upper bound of the random number
 */
export const randomNumber = (min: number, max: number) => {
  if (typeof min !== 'number') return -1
  if (typeof max !== 'number') return -1
  return Math.floor(Math.random() * (max - min + 1)) + min
}
/**
 * Shortens a string to a specified length.
 *
 * @param s - The string to truncate
 * @param length - The amount of characters of the string to show
 */
export const truncate = (s: string, length = 30, omission = '...') => {
  if (typeof s !== 'string') return ''
  if (typeof length !== 'number') return ''
  return `${s.substr(0, length).trim()}${
    s.length > length ? ` ${omission}` : ''
  }`
}
