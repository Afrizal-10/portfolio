import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {FaPaperPlane} from "react-icons/fa";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Pesan berhasil dikirim!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Gagal mengirim pesan. Coba lagi.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md border"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nama
        </label>
        <input
          type="text"
          name="user_name"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-graya-800"
          placeholder="Nama lengkap"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="email@example.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pesan
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="Tulis pesan Anda..."
          required
        ></textarea>
      </div>

      {status && (
        <div className="text-sm text-gray-800 bg-blue-100 p-2 rounded">
          {status}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition flex items-center gap-2 disabled:opacity-50"
      >
        <FaPaperPlane />
        {loading ? "Mengirim..." : "Kirim"}
      </button>
    </form>
  );
}
