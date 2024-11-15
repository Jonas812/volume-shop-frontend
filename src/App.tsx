import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/home/Homepage"
import ProductsGrid from "./components/producsGrid/ProductsGrid"
import NotFound from "./pages/notFound/NotFound"
import Layout from "./pages/layout/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="men/*" element={<ProductsGrid />} />
        <Route path="women/*" element={<ProductsGrid />} />
        <Route path="accessoires/*" element={<ProductsGrid />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App    