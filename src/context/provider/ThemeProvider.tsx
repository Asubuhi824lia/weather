import { useState } from 'react';
import { ReactNode } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import ChangeCssRootVariables from '../../model/ChangeCssRootVariables';


interface Props {
  children: ReactNode,
}


export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<string>(Theme.LIGHT)

  function changeTheme(theme: string) {
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