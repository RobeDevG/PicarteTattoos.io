import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bg.css'
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'

import global_es from './translate/es/global_es.json'
import global_en from './translate/en/global_en.json'

i18next.init({
  interpolation:{ escapeValue:false},
  lng: "es",
  resources: {
    es:{
      global: global_es
    },
    en:{ 
      global: global_en
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
)
