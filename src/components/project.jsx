import {FaReact, FaLaravel, FaNodeJs} from "react-icons/fa";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiPrisma, SiMysql, SiTypescript, SiExpress} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {DiMongodb} from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
import MagicBento from "./MagicBento/MagicBento";

function Project() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      foto: "/project1.jpg",
      title: "Booking Hotel",
      desc: "A web-based hotel booking platform with admin and user roles. Users can register, log in, book rooms, and simulate payments via Midtrans. Booking and payment details are shown after checkout.",
      icons: [
        <RiNextjsFill className="text-black" />,
        <SiPrisma className="text-green-600" />,
        <BiLogoPostgresql className="text-gray-900" />,
        <RiTailwindCssFill className="text-sky-400" />,
      ],
      repo: "https://github.com/Afrizal-10/booking-hotel",
      color: "#060010",
    },
    {
      foto: "/project2.jpg",
      title: "CRUD Laravel",
      desc: "A Laravel-based CRUD application with authentication. Users must register and log in to access the system. After logging in, users can create, update, and delete data entries seamlessly through a clean and responsive interface.",
      icons: [
        <FaLaravel className="text-red-500" />,
        <RiTailwindCssFill className="text-sky-400" />,
        <SiMysql className="text-gray-900" />,
      ],
      repo: "https://github.com/Afrizal-10/crud-mahasiswa",
    },
    {
      foto: "/project3.jpg",
      title: "E-Commerce Store",
      desc: "An e-commerce web app with role-based access. Admins can manage and add products through a dedicated dashboard. Users must register and log in before making purchases, ensuring secure and personalized shopping experiences.",
      icons: [
        <RiNextjsFill className="text-black" />,
        <FaReact className="text-blue-500" />,
        <SiTypescript className="text-blue-600" />,
        <SiPrisma className="text-green-600" />,
        <BiLogoPostgresql className="text-gray-900" />,
        <RiTailwindCssFill className="text-sky-400" />,
      ],
      repoFE: "https://github.com/Afrizal-10/website-store",
      repoBE: "https://github.com/Afrizal-10/webiste-admin-toko-online",
    },
    {
      foto: "/project4.jpg",
      title: "CRUD Manajemen Buku",
      desc: "A full-featured library management platform with a secure login system and role-based access. Admin users can manage books, authors, and categories directly from the dashboard. Regular users can log in to browse available books and request loans.",
      icons: [
        <FaLaravel className="text-red-500" />,
        <RiTailwindCssFill className="text-sky-400" />,
        <SiMysql className="text-gray-900" />,
      ],
      repo: "https://github.com/Afrizal-10/crud-manajemen-buku",
    },
    {
      foto: "/project5.jpg",
      title: "AI Groq React",
      desc: "A responsive AI chatbot built with React and integrated with the Groq API for fast, intelligent responses. It supports natural language queries and delivers real-time answers through an interactive chat interface.",
      icons: [<FaReact className="text-blue-500" />],
      repo: "https://github.com/Afrizal-10/reactGroqAI",
    },
    {
      foto: "/project6.png",
      title: "CRUD MERN",
      desc: "This project is a simple MERN Stack CRUD application that allows users to manage student data through a React frontend and an Express backend connected to MongoDB.",
      icons: [
        <DiMongodb className="text-green-500" />,
        <SiExpress className="text-black" />,
        <FaReact className="text-blue-500" />,
        <FaNodeJs className="text-green-600" />,
      ],
      repoFE: "https://github.com/Afrizal-10/frontend-crud-mern",
      repoBE: "https://github.com/Afrizal-10/backend-crud-mern",
    },
    {
      foto: "/project7.png",
      title: "Simple Invoice Generator",
      desc: "Simple Invoice Generator is a web app to easily manage and generate invoices. Built with React and Express, it features authentication, PDF export, and a responsive UI powered by Tailwind CSS.",
      icons: [
        <DiMongodb className="text-green-500" />,
        <SiExpress className="text-black" />,
        <FaReact className="text-blue-500" />,
        <FaNodeJs className="text-green-600" />,
      ],
      repoFE: "https://github.com/Afrizal-10/frontend-sig",
      repoBE: "https://github.com/Afrizal-10/backend-sig",
    },
  ];

  const certificates = [
    {image: "/certificate1.jpg"},
    {image: "/certificate2.jpg"},
    {image: "/certificate3.jpg"},
    {image: "/certificate4.jpg"},
  ];

  useEffect(() => {
    AOS.init({duration: 1000, once: true});
  }, []);

  return (
    <section id="projects" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-28" data-aos="fade-up">
        <h2 className="font-bold text-gray-900 text-3xl md:text-4xl mb-12 text-center">
          Projects
        </h2>
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-2 rounded-md font-medium ${
              activeTab === "projects"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900 border"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-6 py-2 rounded-md font-medium ${
              activeTab === "certificates"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900 border"
            }`}
          >
            Certificates
          </button>
        </div>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          Every project is a snapshot of my learning journey—where creativity
          meets logic, and problems become opportunities. It's not just about
          building apps, but about building confidence, skills, and a sense of
          purpose through code.
        </p>

        {/* Project Card pakai MagicBento */}
        {activeTab === "projects" && <MagicBento projects={projects} />}

        {/* Certificate Card tetap pakai grid biasa */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={cert.image}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;
