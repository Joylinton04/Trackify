import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from './context/useContext.tsx'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
)
