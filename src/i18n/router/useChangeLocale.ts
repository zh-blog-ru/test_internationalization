'use client';
import { locales, LocaleType } from '../locales';
import { changeLocale } from './changeLocale';
import useLocalizedRouter from './LocalizedUseRouter';
//useLocalizedRouter создадим чуть позже

export function useChangeLocale() {
    const router = useLocalizedRouter();

    return async (locale: LocaleType) => {
        if (locales.includes(locale)) {
            await changeLocale(locale)
            router.changeLocale(locale)
        }
    };
}