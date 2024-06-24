import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<NextUIProvider>
<HashRouter>
      <App />
      </HashRouter>
    </NextUIProvider>
)
