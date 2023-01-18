import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, HashRouter } from 'react-router-dom'
import App from './App'

import { ErrorBoundary, Page404 } from './shared'

import './index.css'
import './assets/styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <ErrorBoundary>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'*'} element={<Page404 />} />
      </Routes>
    </ErrorBoundary>
  </HashRouter>
)
