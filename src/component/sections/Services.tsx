"use client";

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-b from-[#0B1220] to-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-14" data-aos="fade-right">
          What We Do
        </h3>

        <div className="grid md:grid-cols-4 gap-8">
          <div
            className="p-6 border border-white/10 rounded-xl hover:border-[#38BDF8]/40 transition"
            data-aos="fade-up"
          >
            <h4 className="font-semibold mb-2">Website Development</h4>
            <p className="text-sm text-[#94A3B8]">
              Company profiles, landing pages, and custom websites.
            </p>
          </div>

          <div
            className="p-6 border border-white/10 rounded-xl hover:border-[#38BDF8]/40 transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="font-semibold mb-2">Web Application</h4>
            <p className="text-sm text-[#94A3B8]">
              Dashboards, admin panels, and business systems.
            </p>
          </div>

          <div
            className="p-6 border border-white/10 rounded-xl hover:border-[#38BDF8]/40 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="font-semibold mb-2">System Engineering</h4>
            <p className="text-sm text-[#94A3B8]">
              Authentication, APIs, database architecture.
            </p>
          </div>

          <div
            className="p-6 border border-white/10 rounded-xl hover:border-[#38BDF8]/40 transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="font-semibold mb-2">Maintenance & Scaling</h4>
            <p className="text-sm text-[#94A3B8]">
              Optimization, upgrades, and long-term support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
