"use client";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* <!-- Background Image --> */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero background.webp"
          fill
          alt="Technology Background"
          className="w-full h-full object-cover"
          priority
        />
        {/* <!-- Overlay --> */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80"></div>
      </div>

      {/* <!-- Content --> */}
      <div className="relative z-10 " data-aos="fade-up">
        <h2
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          data-aos="fade-up"
        >
          Building Modern <br />
          Web & Digital Systems
        </h2>

        <p
          className="text-lg md:text-xl text-white/90 mb-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Nuxantara crafts scalable websites and web applications with strong
          UX, clean engineering, and modern technology.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3 bg-[#38BDF8] text-[#0B1220] rounded-lg font-medium hover:bg-[#38BDF8] transition"
          >
            Start a Project
          </a>

          <a
            href="#portfolio"
            className="px-7 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
