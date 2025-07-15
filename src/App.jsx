import {Routes, Route} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";
import Testimoni from "./components/testimoni";
import Contact from "./components/contact";
import Footer from "./footer";

import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscComment,
} from "react-icons/vsc";

import Dock from "./components/Dock/Dock";
import VelocityAnimation from "./components/velocity";

function App() {
  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  const items = [
    {
      icon: <VscHome size={18} color="white" />,
      label: "Home",
      onClick: () => handleScrollTo("#home"),
    },
    {
      icon: <VscAccount size={18} color="white" />,
      label: "About",
      onClick: () => handleScrollTo("#about"),
    },
    {
      icon: <VscArchive size={18} color="white" />,
      label: "Projects",
      onClick: () => handleScrollTo("#projects"),
    },
    {
      icon: <VscComment size={18} color="white" />,
      label: "Testimoni",
      onClick: () => handleScrollTo("#testimoni"),
    },
    {
      icon: <VscSettingsGear size={18} color="white" />,
      label: "Contact",
      onClick: () => handleScrollTo("#contact"),
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen relative">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <VelocityAnimation />
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

      <Dock items={items} />
    </div>
  );
}

export default App;
