export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className="
          max-w-6xl mx-auto px-6 h-14
          flex items-center justify-between
          backdrop-blur-md
          bg-white/70
          border-b border-transparent
          supports-[backdrop-filter]:bg-white/60
        "
      >
        {/* Brand */}
        <span className="text-sm font-medium text-gray-900">
          Garvit Gupta
        </span>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-700">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Experience", "#experience"],
            ["Skills", "#skills"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="
                transition-colors
                hover:text-blue-600
              "
            >
              {label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="
              transition-colors
              hover:text-blue-600
              font-medium
            "
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
