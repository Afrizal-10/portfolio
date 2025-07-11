import {Link} from "react-router-dom";
import TestimoniList from "./testimoniList";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

function Testimoni() {
  useEffect(() => {
    AOS.init({duration: 800, once: true});
  }, []);
  return (
    <section id="testimoni" className="py-20 bg-white space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
          Apa Kata Mereka?
        </h2>
      </div>

      <TestimoniList limit={10} direction="left" />
      <TestimoniList limit={10} direction="right" />

      <div className="text-center mt-8">
        <Link to="/testimoni/form">
          <button
            className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800"
            data-aos="fade-up"
          >
            Isi Testimoni
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Testimoni;
