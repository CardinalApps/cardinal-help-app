import generalStrings from './strings/general'
import menuStrings from './strings/menu'

// cache strings, will be the main reference for all lookups at runtime
let strings = {}

/**
 * Get a localized string using a key.
 *
 * @param {string} key - String key, e.g., `home.title`.
 * @param {string} [locale] - The requested locale. Defaults to English. Falls
 * back to English if the string has not been translated into the locale.
 * @returns {string} - Returns the string. May contain HTML. If the key doesn't
 * exist, the key itself will be returned and a warning will be printed in the
 * console.
 */
export function i18n(key, locale = 'en') {
  if (!Object.keys(strings).length) {
    console.log('Caching i18n strings')
    strings = i18ns()
  }

  if (!(key in strings)) {
    console.warn('Invalid i18n key', key)
    return key
  }

  return strings[key][locale] || strings[key]['en'] || key
}

/**
 * Get all strings and all of their translations. Always pulls strings from the
 * i18n files instead of using the cached strings.
 *
 * @returns {Object} - Returns an object whose keys are the string keys, and
 * values are the locale objects. Each locale object contains keys that are
 * locale slugs, associated with the string for that locale.
 */
export function i18ns() {
  return {
    ...generalStrings,
    ...menuStrings,
    }
}