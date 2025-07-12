import {Routes, Route} from "react-router-dom";
import Navbar from "./navbar";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";
import Testimoni from "./components/testimoni"; // Sudah termasuk modal form di dalamnya
import Contact from "./components/contact";
import Footer from "./footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Project />
              <Testimoni />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/testimoni" element={<Testimoni />} />
      </Routes>
    </div>
  );
}

export default App;
