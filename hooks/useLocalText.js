/**
 * Returns the correct string from an object of i18n strings.
 * Will fall back to English if the translation is not in the object.
 * 
 * @param {string} i18n - An object where the keys are locales, and the values are translated strings.
 * @param {string} [locale] - The locale we want the translation for.
 */
export default function useLocalText(i18n, locale = 'en') {
  const hardcodedFallback = 'en'

  return i18n[locale] || i18n[hardcodedFallback] || 'Missing string'
}