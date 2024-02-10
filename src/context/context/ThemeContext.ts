import { createContext } from "react";


export enum Theme {
	DARK 	= 'dark',
	LIGHT = 'light',
}

export type ThemeContextType = {
  theme: string,
  setTheme: (theme: string) => void,
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  setTheme: () => {},
});