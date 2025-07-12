import {CiCircleInfo} from "react-icons/ci";
import {FaUser, FaPhone, FaUniversity, FaDownload} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {SlCalender} from "react-icons/sl";
import {MdEmail} from "react-icons/md";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({duration: 1000, once: true});
  }, []);

  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div
          className="flex flex-col items-center text-center mb-10"
          data-aos="fade-up"
        >
          <h2 className="font-bold text-gray-900 text-3xl md:text-4xl mt-16">
            About Me
          </h2>
        </div>

        <div
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8 mx-auto max-w-6xl px-4"
          data-aos="fade-up"
        >
          <div
            className="flex justify-center md:justify-start w-full md:w-auto"
            data-aos="fade-up"
          >
            <img
              src="/profile.jpg"
              alt="foto"
              className="w-[250px] md:w-[350px] rounded shadow-lg"
            />
          </div>

          <div
            className="text-center md:text-left max-w-xl w-full"
            data-aos="fade-up"
          >
            <h3 className="flex items-center justify-center md:justify-start text-2xl font-bold text-gray-900 gap-2 mb-2">
              <CiCircleInfo className="text-xl bg-gray-900 p-1 rounded text-white relative top-[1px]" />
              How Am I
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I’m a Frontend Developer who enjoys turning designs into
              responsive, interactive user interfaces. I focus on clean code,
              pixel-perfect implementation, and a great user experience across
              devices.
            </p>

            <div className="mt-8">
              <h3 className="flex items-center justify-center md:justify-start text-2xl font-bold text-gray-900 gap-2 mb-4">
                <CiCircleInfo className="text-xl bg-gray-900 p-1 rounded text-white" />
                Personal Info
              </h3>

              <div className="space-y-3">
                {[
                  {
                    icon: <FaUser />,
                    label: "Name:",
                    value: "Adi Juliyanto Afrizal",
                  },
                  {
                    icon: <FaLocationDot />,
                    label: "Location:",
                    value: "Indramayu",
                  },
                  {
                    icon: <FaPhone />,
                    label: "Phone:",
                    value: "+62 821 3358 1984",
                  },
                  {
                    icon: <SlCalender />,
                    label: "Date Of Birth:",
                    value: "10 Juli 2005",
                  },
                  {
                    icon: <MdEmail />,
                    label: "Email:",
                    value: "adijuliyantoafrizal10@gmail.com",
                  },
                  {
                    icon: <FaUniversity />,
                    label: "Education:",
                    value: "Universitas Subang",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-800 gap-2 whitespace-nowrap overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <span className="text-xl bg-gray-900 text-white p-1 rounded shrink-0">
                      {item.icon}
                    </span>
                    <span className="font-medium shrink-0">{item.label}</span>
                    <span className="truncate">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4" data-aos="fade-up" data-aos-delay="900">
                <a
                  href="/path-ke-cv.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  <FaDownload className="text-lg" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
