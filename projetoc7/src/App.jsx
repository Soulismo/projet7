import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Location from "./pages/Location";
import Header from "./composant/Header";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const basename = import.meta.env.MODE === "production" ? "/kasa" : "";
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" replace />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
