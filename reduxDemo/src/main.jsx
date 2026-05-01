import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'; 
// FIX: redux provider missing tha
import { store } from './redux/store.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      {/* FIX: redux connect karne ke liye Provider wrap */}
      <App />
    </Provider>
  </StrictMode>,
)