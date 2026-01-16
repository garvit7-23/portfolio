import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* ================= BRAND ================= */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold text-gray-900">
                Garvit Gupta
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Full-Stack Software Engineer focused on building scalable
              backend systems, clean frontend interfaces, and reliable
              real-world software solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
             <a
               href="https://github.com/garvit7-23"
               target="_blank"
               aria-label="GitHub"
               className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:text-blue-600 hover:border-blue-600 transition"
             >
               <Github className="w-5 h-5" />
             </a>

             <a
               href="http://www.linkedin.com/in/garvit-gupta-2666232a5"
               target="_blank"
               aria-label="LinkedIn"
               className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:text-blue-600 hover:border-blue-600 transition"
             >
              <Linkedin className="w-5 h-5" />
             </a>

            <a
               href="https://twitter.com/yourusername"
               target="_blank"
               aria-label="Twitter"
               className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:text-blue-600 hover:border-blue-600 transition"
             >
               <Twitter className="w-5 h-5" />
             </a>
           </div>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-600">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Skills", "#skills"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-blue-600 transition"
                  >
                    → {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= FOCUS AREAS ================= */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
              Focus Areas
            </h4>

            <ul className="space-y-3 text-gray-600">
              {[
                "Backend Systems",
                "API Development",
                "Distributed Systems",
                "Frontend Engineering",
                "System Design",
              ].map((item) => (
                <li key={item}>→ {item}</li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91-9914145873</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>ldhgarvit723@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>India</span>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-20 pt-8 border-t text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Garvit Gupta</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
