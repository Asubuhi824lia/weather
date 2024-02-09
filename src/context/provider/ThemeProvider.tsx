import { useState } from 'react';
import { ReactNode } from "react"
import { ThemeContext } from "../context/ThemeContext"


export enum Theme {
	DARK 	= 'dark',
	LIGHT = 'light',
}

interface Props {
  children: ReactNode,
}


export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<string>(Theme.LIGHT)

  return <ThemeContext.Provider 
    value={{theme, setTheme}}
    {...props}
  >
    {children}
  </ThemeContext.Provider>
}