import { ReactNode, createContext, useState } from "react";

export interface THEME_HOOK {
  theme?: any
  setTheme?: any
}

export interface THEME {
  mode: 'light' | 'dark' | 'auto'
  lang: 'en' | 'mm'
}

export const ThemeContext = createContext<THEME_HOOK>({})

export const ThemeProvider = (props: { children: ReactNode }) => {

  const [theme, setTheme] = useState<THEME>({
    mode: 'light',
    lang: 'en'
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
