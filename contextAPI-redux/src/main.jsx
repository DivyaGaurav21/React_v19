// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { CountContextProvider } from './context/CountContextProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <CountContextProvider>
//     <App /> 
//     </CountContextProvider>
//   </StrictMode>,
// )

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { ThemeContextProvider } from './context/ThemeContextProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeContextProvider>
//       <App />
//     </ThemeContextProvider>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/UserContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
