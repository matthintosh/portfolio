import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AptabaseProvider } from '@aptabase/react'
import { API_KEY_APTABASE } from './config/aptabase.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AptabaseProvider
            appKey={API_KEY_APTABASE}
            options={{ appVersion: '1.0.0' }}
        >
            <App />
        </AptabaseProvider>
    </React.StrictMode>
)
