import {useEffect, useState} from "react";
import {FaInstagram, FaGithub, FaLinkedin, FaDiscord} from "react-icons/fa";
import ContactForm from "./contactForm";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [activeTab, setActiveTab] = useState("contact");

  useEffect(() => {
    AOS.init({duration: 800, once: true});
  }, []);

  return (
    <section className="py-20 w-full bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
          Contact
        </h2>
        <div
          className="flex justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-6 py-2 rounded-md font-medium ${
              activeTab === "contact"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900 border"
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-2 rounded-md font-medium ${
              activeTab === "support"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900 border"
            }`}
          >
            Support
          </button>
        </div>

        {activeTab === "contact" ? (
          <div
            className="grid md:grid-cols-2 gap-8 items-start"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/izall10_?utm_source=qr&igsh=d294OTM1cGtlYzh6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded shadow hover:bg-gray-800 transition"
              >
                <FaInstagram className="text-2xl" />
                <span>Instagram</span>
              </a>

              <a
                href="https://github.com/Afrizal-10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded shadow hover:bg-gray-800 transition"
              >
                <FaGithub className="text-2xl" />
                <span>Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/afrizal-b8242431b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGtq6zCVzTyqoHzh%2FSyxZ0w%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded shadow hover:bg-gray-800 transition"
              >
                <FaLinkedin className="text-2xl" />
                <span>Linkedin</span>
              </a>

              <a
                href="discordapp.com/users/1174005395132530759"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded shadow hover:bg-gray-800 transition"
              >
                <FaDiscord className="text-2xl" />
                <span>Discord</span>
              </a>
            </div>

            {/* Form Contact */}
            <div data-aos="fade-up" data-aos-delay="150">
              <ContactForm />
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h2 className="text-3xl font-bold mb-4">Qris</h2>
            <img
              src="/qr.jpg"
              alt="QR Code"
              className="w-64 h-64 object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
