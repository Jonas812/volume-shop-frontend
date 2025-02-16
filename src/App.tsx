import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/home/Homepage"
import Browse from "./pages/browse/Browse"
import NotFound from "./pages/notFound/NotFound"
import Layout from "./layout/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="furniture/*" element={<Browse />} />
        <Route path="decoration/*" element={<Browse />} />
        <Route path="lamps/*" element={<Browse />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App