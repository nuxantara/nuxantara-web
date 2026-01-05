import Image from "next/image";
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-14" data-aos="fade-right">
          Selected Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* <!-- Project Card --> */}
          <div
            className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            data-aos="zoom-in"
          >
            <div className="relative overflow-hidden w-full aspect-1200/630">
              <Image
                fill
                src="/images/Android Quran Digital.webp"
                alt="Project Alpha"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative p-4">
              <h4 className="font-semibold mb-1">Digital Al-Qur'an App</h4>
              <p className="text-sm text-[#94A3B8] mb-4">
                Offline-first digital Al-Qur'an mobile application with multiple
                reciters, downloadable audio, and additional Islamic content.
              </p>

              {/* <!-- Tech Stack --> */}
              <div className="flex items-center gap-3 text-xl text-white/70">
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-react-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-github-original"></i>
              </div>
            </div>
          </div>

          {/* <!-- Project Card --> */}
          <div
            className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="relative overflow-hidden w-full aspect-1200/630">
              <Image
                fill
                src="/images/Golapar Banner Page.webp"
                alt="Project Alpha"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative p-4">
              <h4 className="font-semibold mb-1">Go Kenyang Web Page</h4>
              <p className="text-sm text-[#94A3B8] mb-4">
                Lightweight UMKM website for displaying menus, real-time stock
                availability, and promotional content.
              </p>

              <div className="flex items-center gap-3 text-xl text-white/70">
                <i className="devicon-html5-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
              </div>
            </div>
          </div>

          {/* <!-- Project Card --> */}
          <div
            className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="relative overflow-hidden w-full aspect-1200/630">
              <Image
                fill
                src="/images/CBT nailul authar.webp"
                alt="Project Alpha"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative p-4">
              <h4 className="font-semibold mb-1">
                Nailul Authar Learning System
              </h4>
              <p className="text-sm text-[#94A3B8] mb-4">
                Web-based computer-based testing (CBT) system with real-time
                saving and notifications.
              </p>

              <div className="flex items-center gap-3 text-xl text-white/70">
                <i className="devicon-codeigniter-plain"></i>
                <i className="devicon-docker-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-php-plain"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
