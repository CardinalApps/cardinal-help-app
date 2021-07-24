import helpStrings from './strings/help'

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
export function getI18nString(key, locale = 'en') {
  if (!key in strings) {
    console.warn('Invalid i18n key', key)
    return key
  }

  return strings[key][locale] || strings[key]['en'] || key
}

/**
 * Get all strings and all of their translations.
 *
 * @returns {Object} - Returns an object whose keys are the string keys, and
 * values are the locale objects. Each locale object contains keys that are
 * locale slugs, associated with the string for that locale.
 */
export function getI18nStrings() {
  return {...helpStrings}
}