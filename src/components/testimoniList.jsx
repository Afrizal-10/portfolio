import {useEffect, useState} from "react";
import {FaUserCircle} from "react-icons/fa";
import "../testimoniList.css";

export default function TestimoniList({limit = 10, direction = "left"}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Gunakan base URL dinamis via env atau langsung ke /api untuk development proxy
        const res = await fetch(`/api/testimoni?limit=${limit}`);
        const testimonials = await res.json();
        setData(testimonials);
      } catch (error) {
        console.error("Fetch error:", error);
      }
      setLoading(false);
    };
    fetchTestimonials();
  }, [limit]);

  if (loading) return <p className="text-center">Memuat testimoni...</p>;
  if (!data || data.length === 0)
    return <p className="text-center">Belum ada testimoni.</p>;

  const marqueeItems = [...data, ...data];

  return (
    <div className="overflow-hidden py-4">
      <div
        className={`marquee-track ${
          direction === "right" ? "marquee-right" : "marquee-left"
        }`}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={item._id + index} // unik dengan kombinasi _id + index
            className="marquee-item bg-gray-50 border shadow rounded-lg px-4 py-3 mx-2 min-w-[250px] max-w-xs transition transform hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2 text-gray-800">
              <FaUserCircle className="text-xl text-gray-600" />
              <span className="font-semibold text-sm sm:text-base break-words">
                {item.name}
              </span>
            </div>
            <p className="text-gray-600 italic break-words whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
              "{item.message}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
