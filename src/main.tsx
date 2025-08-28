import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import {ConvexReactClient} from "convex/react";



const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);




createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <ConvexAuthProvider client={convex}>
              <App />
          </ConvexAuthProvider>

      </BrowserRouter>
  </StrictMode>,
)
