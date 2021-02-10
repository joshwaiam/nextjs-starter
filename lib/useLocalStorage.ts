import { useState } from 'react'

/**
 * Stores a key/value pair in localStorage
 *
 * Usage:
 *
 * // Similar to useState but first arg is key to the value in local storage.
 * const [name, setName] = useLocalStorage('name', 'Bob');
 *
 * @param {string}  key             Key to use when storing value in localStorage
 * @param {T}       initialValue    Initial value to store in localStorage
 *
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      console.error(e)
      return initialValue
    }
  })

  /**
   * Return a wrapped version of useState's setting function
   * that persists the new value to localStorage
   *
   * @param {T} value   Value to store in localStorage
   *
   */
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      /** Allow value to be a function so we have the same API as useState */
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
