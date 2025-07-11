import TypingText from "./TypingText";
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 md:px-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <TypingText text="HHi, I'm Afrizal" speed={100} />
          </h1>
          <h4 className="text-xl sm:text-2xl md:text-3xl text-gray-900">
            Frontend Developer
          </h4>
          <p className="mt-4 text-gray-700">
            A Frontend Developer who enjoys crafting clean and responsive web
            interfaces. My focus is on building simple, well-structured, and
            user-friendly designs that work seamlessly across all devices.
          </p>

          {/* Sosial Media */}
          <div className="mt-8 flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
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
                  href="https://www.linkedin.com/in/afrizal-b8242431b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGtq6zCVzTyqoHzh%2FSyxZ0w%3D%3D"
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

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
