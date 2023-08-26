import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AppContextProvider } from './context'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import common_en from './translations/en/common.json'
import common_ka from './translations/ka/common.json'
import home_en from './translations/en/home.json'
import home_ka from './translations/ka/home.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
      home: home_en,
    },
    ka: {
      common: common_ka,
      home: home_ka,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
