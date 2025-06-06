import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/MainRoute.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store.js'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
