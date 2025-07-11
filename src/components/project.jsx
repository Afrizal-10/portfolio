import {FaReact, FaCss3Alt, FaLaravel} from "react-icons/fa";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiPrisma, SiMysql, SiTypescript} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

function Project() {
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
    },
    {
      foto: "/project4.jpg",
      title: "CRUD Peminjaman Buku",
      desc: "A full-featured library management platform with a secure login system and role-based access. Admin users can manage books, authors, and categories directly from the dashboard. Regular users can log in to browse available books and request loans. The system ensures efficient resource management and a seamless borrowing experience.",
      icons: [
        <FaLaravel className="text-red-500" />,
        <RiTailwindCssFill className="text-sky-400" />,
        <SiMysql className="text-gray-900" />,
      ],
    },
    {
      foto: "/project5.jpg",
      title: "AI Groq React",
      desc: "A responsive AI chatbot built with React and integrated with the Groq API for fast, intelligent responses. It supports natural language queries and delivers real-time answers through an interactive chat interface.",
      icons: [<FaReact className="text-blue-500" />],
    },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={project.foto}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
                <div className="flex flex-wrap items-center gap-3 mt-4 text-xl sm:text-2xl">
                  <p className="font-medium text-gray-700">Tech:</p>
                  {project.icons.map((Icon, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 p-2 rounded shadow text-xl text-gray-700"
                    >
                      {Icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
