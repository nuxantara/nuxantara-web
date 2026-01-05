// app/page.tsx
"use client";

import { useState, FormEvent, ChangeEvent, InputEvent } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Swal from "sweetalert2";
import axios from "@/lib/Axios";

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!executeRecaptcha) {
      console.log("reCAPTCHA belum siap");
      return;
    }
    try {
      const token = await executeRecaptcha("submit_form");
      // Kirim ke API (bisa pakai EmailJS, Resend, atau API sendiri)
      const response = await axios.post("/api/contact", {
        ...formData,
        recaptchaToken: token,
      });
      if (response.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Gagal mengirim pesan",
        });
      }
      Swal.fire({
        icon: "success",
        title: "Pesan terkirim!",
        text: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
      });
      console.log(response);
      setFormData({
        name: "",
        email: "",
        description: "",
      });
    } catch (error) {
      setMessage("Gagal mengirim pesan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Let's Build Together
        </h3>
        <p
          className="text-[#94A3B8] mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tell us about your project and we'll get back to you.
        </p>

        <form
          className="space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
          onSubmit={handleSubmit}
        >
          {loading && (
            <div className="absolute opacity-50 bg-black w-full h-full z-2">
              <div
                className="flex justify-center items-center h-full"
                role="status"
                aria-live="polite"
              >
                <div className="animate-spin ease-linear rounded-full border-8 border-t-8 border-gray-200 border-t-blue-500 h-16 w-16"></div>
                <span className="sr-only">Loading…</span>
              </div>
            </div>
          )}

          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded bg-[#0B1220] border border-white/10 focus:border-[#38BDF8] outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded bg-[#0B1220] border border-white/10 focus:border-[#38BDF8] outline-none"
          />
          <textarea
            placeholder="Project Details"
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full p-3 rounded bg-[#0B1220] border border-white/10 focus:border-[#38BDF8] outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-[#38BDF8] text-[#0B1220] rounded font-medium hover:bg-[#22C55E] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
