import {useState, useEffect} from "react";
import TestimoniList from "./testimoniList";
import {supabase} from "../lib/supabaseClient";
import AOS from "aos";
import "aos/dist/aos.css";
import {alertError, alertSuccess} from "../lib/alert";

function Testimoni() {
  const [showForm, setShowForm] = useState(false);
  const [nama, setNama] = useState("");
  const [isi, setIsi] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    AOS.init({duration: 800, once: true});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const {error} = await supabase.from("testimoni_app").insert([
      {
        name: nama,
        message: isi,
      },
    ]);

    if (error) {
      alertError("Gagal mengirim testimoni. Coba lagi.");
      console.error(error);
    } else {
      setNama("");
      setIsi("");
      setShowForm(false);
      alertSuccess("Terkirim!", "Terima kasih atas testimoninya!");
    }

    setLoading(false);
  };

  return (
    <section id="testimoni" className="py-20 bg-white space-y-10 relative">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
          Apa Kata Mereka?
        </h2>
      </div>

      <TestimoniList limit={10} direction="left" />
      <TestimoniList limit={10} direction="right" />

      <div className="text-center mt-8">
        <button
          onClick={() => setShowForm(true)}
          className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800"
          data-aos="fade-up"
        >
          Isi Testimoni
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4 animate-fade-in"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Share Your Testimonial
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama lengkap"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Isi Testimoni
              </label>
              <textarea
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                placeholder="Tulis kesan kamu di sini..."
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              ></textarea>
            </div>

            {errorMsg && (
              <div className="text-sm text-red-600 bg-red-100 p-2 rounded">
                {errorMsg}
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded border border-gray-400 text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default Testimoni;
