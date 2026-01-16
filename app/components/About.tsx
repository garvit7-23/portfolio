import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      {/* Section Heading */}
      <h2 className="text-center text-4xl font-semibold mb-20">
        About Me
      </h2>

      {/* Content Grid */}
      <div className="grid  gap-20 items-center">
        {/* LEFT — TEXT */}
        <div className="text-center space-y-6  text-gray-700 leading-relaxed">
          <p>
            I’m a Computer Engineering graduate (2025) from{" "}
            <span className="font-medium text-gray-900">
              Thapar University
            </span>{" "}
            with a strong focus on full-stack development.
          </p>

          <p>
            I enjoy building systems that handle real-world complexity —
            scalable APIs, background job processors, data pipelines,
            and frontend interfaces that make those systems usable.
          </p>

          <p>
            My approach is product-driven: I care about reliability,
            performance, and clean design just as much as writing
            correct code.
          </p>
        </div>

        {/* RIGHT — PHOTO CARD 
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-[32px] border border-gray-300 overflow-hidden bg-gray-50">
            {/* Replace src later with your real photo 
            <Image
              src="/me.jpg"
              alt="Garvit Gupta"
              fill
              className="object-cover"
            />

            {/* Fallback text if image missing 
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
              Your Photo
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
