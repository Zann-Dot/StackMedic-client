import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import { ClerkProvider } from "@clerk/react-router"
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ClerkProvider publishableKey={clerkPublishableKey}>
          <App />
        </ClerkProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
