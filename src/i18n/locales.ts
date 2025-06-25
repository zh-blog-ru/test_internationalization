//locales.ts

export const locales = ['ru', 'en'] as const
export const defaultLocale = 'ru'
// Для удобства пользования создадим тип
export type LocaleType = typeof locales[number]