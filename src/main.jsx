import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
  const Clerk_Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!Clerk_Key) throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY environment variable')


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ClerkProvider publishableKey={Clerk_Key}>
        <App />
      </ClerkProvider>
    </StrictMode>,
)
