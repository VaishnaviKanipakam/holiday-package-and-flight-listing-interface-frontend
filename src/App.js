import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/DashboardLayout"
import Dashboard from "./components/Dashboard"


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
