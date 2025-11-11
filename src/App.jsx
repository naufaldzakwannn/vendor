import "./index.css";
// import ConfigRoutes from "./routes/ConfigRoutes";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// function App() {
//   return <ConfigRoutes />;
// }

// export default App;

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
