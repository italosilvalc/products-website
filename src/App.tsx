import Footer from "./components/Footer";
import NavbarDesktop from "./components/NavbarDesktop";
import GeneralProvider from "./context/GeneralContext";
import Error404 from "./pages/404/Error404";
import { Route, Routes } from "react-router-dom";
import ComboMakita from "./pages/product-page/combo-makita/ComboMakita";

function App() {
  return (
    <GeneralProvider>
      <div className="bg-base-100">
        <NavbarDesktop />

        <Routes>
          <Route path="/" element={<ComboMakita />} />
          <Route path="/complete" element={<div>Sucesso!</div>} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </div>
    </GeneralProvider>
  );
}

export default App;
