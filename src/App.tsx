import { Route, Routes } from "react-router"
import Layout from "./pages/Layout"
import Analysis from "./pages/Analysis"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/analysis" element={<Analysis />} />
    </Routes>
  )
}

export default App
