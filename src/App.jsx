import {Routes, Route, Link} from "react-router-dom";
import Navbar from "./navbar";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";
import Testimoni from "./components/testimoni"; // Halaman yang berisi tombol dan daftar testimoni
import TestimoniForm from "./components/testimoniForm";
import Contact from "./components/contact";
import Footer from "./footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* ✅ Ini boleh */}
      <Link to="/testimoni/form">
        <button>Isi Testimoni</button>
      </Link>

      {/* ✅ Ini khusus untuk routing */}
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
        <Route path="/testimoni/form" element={<TestimoniForm />} />
        <Route path="/testimoni" element={<Testimoni />} />
      </Routes>
    </div>
  );
}

export default App;
