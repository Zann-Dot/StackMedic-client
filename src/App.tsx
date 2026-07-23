import { Route, Routes } from "react-router"
import SignInPage from "../app/routes/sign-in"
import SignUpPage from "../app/routes/sign-up"
import Layout from "./pages/Layout"
import Analysis from "./pages/Analysis"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
