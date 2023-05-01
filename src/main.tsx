import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './hook/context/theme.context'
import './style/index.scss'
import { RouterProvider } from 'react-router-dom'
import { browserRouter } from './router'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={browserRouter} />
    </ThemeProvider>
  </React.StrictMode>,
)
