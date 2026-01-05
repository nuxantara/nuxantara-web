export default function NavBar() {
  return (
    <nav className="fixed w-full z-50 bg-[#0B1220]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-[#38BDF8]">
          Nuxantara
        </h1>

        <div className="space-x-6 text-sm hidden md:block">
          <a
            href="#services"
            className="nav-link hover:text-[#38BDF8] transition"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="nav-link hover:text-[#38BDF8] transition"
          >
            Portfolio
          </a>
          <a
            href="#process"
            className="nav-link hover:text-[#38BDF8] transition"
          >
            Process
          </a>
          <a
            href="#contact"
            className="nav-link hover:text-[#38BDF8] transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
