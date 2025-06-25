//LocaleSlice.ts
import { LocaleType } from "@/i18n/locales";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    locale: LocaleType | ''
}

const initialState: InitialStateType = { locale: '' }

export const LocaleSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        updateLocale(state: InitialStateType, action: PayloadAction<LocaleType | "">): any {
            state.locale = action.payload
        }
    },
})

export const { updateLocale } = LocaleSlice.actions