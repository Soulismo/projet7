import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Location from "./pages/Location";
import Header from "./composant/Header";
import Footer from "./composant/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
