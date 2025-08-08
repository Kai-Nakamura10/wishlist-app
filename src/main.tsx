import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { WishlistProvider } from './features/wishlist/contexts/WishlistContext';

const rootElement = document.getElementById("root")

createRoot(rootElement!).render(
  <StrictMode>
  <BrowserRouter>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </BrowserRouter>
  </StrictMode>,
)
