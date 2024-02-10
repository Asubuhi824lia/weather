import { useState } from 'react';
import { ReactNode } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import ChangeCssRootVariables from '../../model/ChangeCssRootVariables';
import { keys, storage } from '../../model/Storage';


interface Props {
  children: ReactNode,
}


export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<string>(storage.getItem(keys.THEME) ?? Theme.LIGHT)

  function changeTheme(theme: string) {
    storage.setItem(keys.THEME, theme)
    setTheme(theme)
    ChangeCssRootVariables(theme)
  }

  return <ThemeContext.Provider
    value={{
      theme, 
      setTheme: changeTheme,
    }}
    {...props}
  >
    {children}
  </ThemeContext.Provider>
}