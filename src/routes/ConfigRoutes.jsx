import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function ConfigRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
