import {useState} from "react";
import {supabase} from "../lib/supabaseClient";
import {useNavigate} from "react-router-dom";

export default function TestimoniForm() {
  const [nama, setNama] = useState("");
  const [isi, setIsi] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

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
      console.error("Insert error:", error);
      setErrorMsg("Gagal mengirim testimoni. Coba lagi.");
    } else {
      setNama("");
      setIsi("");

      // Navigasi ke halaman utama
      navigate("/", {
        replace: true,
      });

      // Scroll ke testimoni section
      setTimeout(() => {
        const el = document.getElementById("testimoni");
        if (el) el.scrollIntoView({behavior: "smooth"});
      }, 300);
    }

    setLoading(false);
  };

  return (
    <div id="testimoni" className="max-w-7xl mx-auto px-6 md:px-16">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto mt-24"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Testimoni</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama lengkap"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {errorMsg && (
          <div className="text-sm text-red-600 bg-red-100 p-2 rounded">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Mengirim..." : "Kirim Testimoni"}
        </button>
      </form>
    </div>
  );
}
