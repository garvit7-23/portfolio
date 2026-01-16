import Image from "next/image";

const skills = [
  {
    name: "Python",
    caption: "Backend & Systems",
    image: "/skills/python.png",
  },
  {
    name: "FastAPI",
    caption: "API Development",
    image: "/skills/fastapi.png",
  },
  {
    name: "Next.js/React",
    caption: "Frontend Engineering",
    image: "/skills/nextjs.png",
  },
  {
    name: "Mongo DB",
    caption: "Non-Relational Database",
    image: "/skills/mongodb.png",
  },
  {
    name: "SQL",
    caption: "Relational Database",
    image: "/skills/sql.png",
  },
  {
    name: "Git",
    caption: "CI/CD Pipelines",
    image: "/skills/git.png",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      {/* Pill */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 text-sm text-blue-600 bg-blue-50">
          Skills & Technologies
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Tools I Work With
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16 items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center"
          >
            {/* Logo */}
            <div className="relative w-20 h-20 mb-4 grayscale hover:grayscale-0 transition">
              <Image
                src={skill.image}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <p className="text-sm text-gray-600">
              {skill.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
