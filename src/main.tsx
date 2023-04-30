import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './hook/context/theme.context'
import './style/index.scss'
import { Login } from './page/login.page'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  </React.StrictMode>,
)
