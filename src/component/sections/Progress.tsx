export default function Progress() {
  return (
    <section id="process" className="py-32 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* <!-- Heading --> */}
        <div className="mb-16 max-w-xl" data-aos="fade-right">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h3>
          <p className="text-white/60">
            Our structured process ensures clarity, quality, and reliable
            delivery from start to launch.
          </p>
        </div>

        {/* <!-- Process Steps --> */}
        <div className="grid md:grid-cols-5 gap-6 relative">
          {/* <!-- Step --> */}
          <div data-aos="fade-up" className="group">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#38BDF8]/40 hover:bg-white/10 transition">
              {/* <!-- Number --> */}
              <div className="text-[#38BDF8] text-2xl font-bold mb-4">01</div>

              {/* <!-- Title --> */}
              <h4 className="font-semibold mb-2">Discovery</h4>

              {/* <!-- Description --> */}
              <p className="text-sm text-white/60">
                Understanding goals, users, and project requirements clearly.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="group">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#38BDF8]/40 hover:bg-white/10 transition">
              <div className="text-[#38BDF8] text-2xl font-bold mb-4">02</div>
              <h4 className="font-semibold mb-2">Planning</h4>
              <p className="text-sm text-white/60">
                Structuring system flow, features, and technical architecture.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="group">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#38BDF8]/40 hover:bg-white/10 transition">
              <div className="text-[#38BDF8] text-2xl font-bold mb-4">03</div>
              <h4 className="font-semibold mb-2">Development</h4>
              <p className="text-sm text-white/60">
                Building scalable and maintainable web solutions.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="group">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#38BDF8]/40 hover:bg-white/10 transition">
              <div className="text-[#38BDF8] text-2xl font-bold mb-4">04</div>
              <h4 className="font-semibold mb-2">Testing</h4>
              <p className="text-sm text-white/60">
                Ensuring performance, security, and usability.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="group">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#38BDF8]/40 hover:bg-white/10 transition">
              <div className="text-[#38BDF8] text-2xl font-bold mb-4">05</div>
              <h4 className="font-semibold mb-2">Launch</h4>
              <p className="text-sm text-white/60">
                Deploying and monitoring the system in production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
