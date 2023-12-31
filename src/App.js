import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Creations from "./pages/Creations";
import Creation from "./pages/Creation";
import Favorite from "./pages/Favorite";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Creations" element={<Creations />} />
          <Route path="/Creation/:name" element={<Creation />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);