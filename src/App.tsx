import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Homepage from "./pages/home/Homepage"

function App() {
  
  return (
    <>
      <Navbar />
      <div>
    <Routes>
      <Route path="/"  element={<Homepage/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
