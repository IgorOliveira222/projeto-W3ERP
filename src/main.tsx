import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './theme/GlobalStyle.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle/>
    </BrowserRouter>
  </React.StrictMode>,
)
