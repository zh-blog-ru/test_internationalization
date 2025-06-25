//GetDictionary.ts
import 'server-only';
import { LocaleType } from './locales';

// A convenient type that makes it easy to select the needed information from json files
export type DictionaryType = Awaited<ReturnType<typeof dictionaries[keyof typeof dictionaries]>>;

const dictionaries = {
  en: () => import('../../locales/en.json').then((module) => module.default),
  ru: () => import('../../locales/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: LocaleType): Promise<DictionaryType> =>
  dictionaries[locale]();