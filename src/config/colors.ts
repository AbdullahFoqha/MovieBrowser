import {freeze} from "@reduxjs/toolkit";

export interface Colors {
    primary: string,
    accent: string,
    darkPrimary: string,
    lightPrimary: string,
    text_icons: string,
    text_primary: string,
    text_secondary: string,
    divider: string,
    stars: string,
}

export const darkColors: Colors = freeze({
    primary: '#181824',
    accent: '#da1b3a',
    darkPrimary: '#161621',
    lightPrimary: '#1c1c2a',
    text_icons: '#e2e2e2',
    text_primary: '#e2e2e2',
    text_secondary: '#4c4c55',
    divider: '#e2e2e2',
    stars: '#f4c248'
})

export const lightColors: Colors = freeze({
    primary: '#fff',
    accent: '#da1b3a',
    darkPrimary: '#161621',
    lightPrimary: '#1c1c2a',
    text_icons: '#e2e2e2',
    text_primary: '#e2e2e2',
    text_secondary: '#4c4c55',
    divider: '#e2e2e2',
    stars: '#f4c248'
})
