import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AppContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
)
