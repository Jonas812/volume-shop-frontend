import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/home/Homepage"
import Browse from "./pages/browse/Browse"
import NotFound from "./pages/notFound/NotFound"
import Layout from "./pages/layout/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="men/*" element={<Browse />} />
        <Route path="women/*" element={<Browse />} />
        <Route path="accessoires/*" element={<Browse />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App