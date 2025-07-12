import TypingText from "./TypingText";
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import SwitchingText from "./SwitchingText";
import Lanyard from "./Lanyard/Lanyard";

function Home() {
  useEffect(() => {
    AOS.init({duration: 1000, once: true});
  }, []);

  return (
    <section id="home" className="w-full bg-white pt-0 md:pt-16 mt-0">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Kiri: Teks dan Sosial Media */}
        <div
          className="w-full md:w-1/2 px-6 md:px-16 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <TypingText text="Hi, I'm Afrizal" speed={100} />
          </h1>
          <h4 className="text-xl sm:text-2xl md:text-3xl text-gray-900">
            <SwitchingText />
          </h4>
          <p className="mt-4 text-gray-700">
            A Frontend Developer who enjoys crafting clean and responsive web
            interfaces. My focus is on building simple, well-structured, and
            user-friendly designs that work seamlessly across all devices.
          </p>

          {/* Sosial Media */}
          <div className="mt-8 flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3" data-aos="fade-up">
              <p className="text-gray-800 font-medium">Follow Me:</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/izall10_?utm_source=qr&igsh=d294OTM1cGtlYzh6"
                  className="shadow-lg bg-white rounded-xl px-3 py-2 text-2xl hover:bg-pink-400 hover:text-white transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/afrizal-b8242431b"
                  className="shadow-lg bg-white rounded-xl px-3 py-2 text-2xl hover:bg-blue-500 hover:text-white transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Afrizal-10"
                  className="shadow-lg bg-white rounded-xl px-3 py-2 text-2xl hover:bg-black hover:text-white transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kanan: Lanyard tampil penuh */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end bg-white"
          data-aos="fade-left"
        >
          <div className="w-full h-full">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
