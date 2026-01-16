import { notFound } from "next/navigation";
import { projects } from "../projects-data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        {project.title}
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        {project.tagline}
      </p>

      {/* Links */}
      <div className="mt-6 flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="px-5 py-2 border rounded-md hover:border-black"
        >
          GitHub
        </a>
      </div>

      {/* Overview */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Problem */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {project.problem}
        </p>
      </section>

      {/* Solution */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Solution</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {project.solution}
        </p>
      </section>

      {/* Solution */}
      {(project.features ?? []).length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {(project.features ?? []).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
      )}




      {/* Architecture */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Architecture</h2>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
          {project.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 border rounded-md text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
