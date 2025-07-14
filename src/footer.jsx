import {FaInstagram, FaGithub, FaLinkedin, FaDiscord} from "react-icons/fa";
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import {Calendar} from "./components/ui/calendar";
import {format} from "date-fns";

export default function Footer() {
  useEffect(() => {
    AOS.init({duration: 800, once: true});
  }, []);
  return (
    <footer className="bg-gray-900 text-white py-10" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Adi Juliyanto Afrizal</h3>
          <p className="text-gray-400 text-sm">
            Membangun solusi digital dengan semangat dan ketelitian.
          </p>
        </div>
        <div data-aos="fade-up">
          <h4 className="font-semibold mb-3">Navigasi</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" className="hover:text-white transition">
                Tentang
              </Link>
            </li>
            <li>
              <Link to="/#projects" className="hover:text-white transition">
                Project
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Sosial Media */}
        <div data-aos="fade-up">
          <h4 className="font-semibold mb-3">Terhubung</h4>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/izall10_?utm_source=qr&igsh=d294OTM1cGtlYzh6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a
              href="https://github.com/Afrizal-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/afrizal-b8242431b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGtq6zCVzTyqoHzh%2FSyxZ0w%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-500" />
            </a>
            <a
              href="discordapp.com/users/1174005395132530759"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="hover:text-indigo-400" />
            </a>
          </div>
        </div>
        {/* calender */}
        <div data-aos="fade-up" className="self-start">
          <div className="p-3 bg-white text-black rounded-lg shadow-md max-w-xs w-full">
            <h2 className="text-center font-semibold text-sm mb-2">
              Kalender Hari Ini
            </h2>
            <Calendar
              mode="single"
              selected={new Date()}
              onSelect={() => {}}
              className="rounded-lg border"
            />
            <p className="text-center mt-2 text-sm text-gray-600">
              Hari ini: {format(new Date(), "EEEE, dd MMMM yyyy")}
            </p>
          </div>
        </div>
      </div>

      <div
        className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm"
        data-aos="fade-up"
      >
        © {new Date().getFullYear()} Afrizal All rights reserved
      </div>
    </footer>
  );
}
