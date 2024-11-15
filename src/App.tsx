import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Homepage from "./pages/home/Homepage"
import ProductsGrid from "./components/producsGrid/ProductsGrid"

function App() {

  return (
    <>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/men/*" element={<ProductsGrid />} />
          <Route path="/women/*" element={<ProductsGrid />} />
          <Route path="/accesoires/*" element={<ProductsGrid />} />
        </Routes>
      </div>
    </>
  )
}

export default App
