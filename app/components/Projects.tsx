const projects = [
  {
    tag: "DISTRIBUTED SYSTEM",
    title: "ForgeQueue",
    description:
      "A fault-tolerant background job queue with retries, prioritization, scheduling, and dead-letter queues.",
    image: "/project-forgequeue.jpg",
    link: "/projects/forgequeue"
  },
  {
    tag: "TRADING SYSTEM",
    title: "Paper Trading Engine",
    description:
      "End-to-end paper trading system with multi-feed replay, portfolio simulation, and strategy backtesting.",
    image: "/project-papertrader.jpg",
    link: "/projects/paper-trader"

  },
  {
    tag: "MAILFORGE",
    title: "Mailforge",
    description:
      "A Resend-like Email API with Queue-based Delivery.",
    image: "/mailforge.jpg",
    link: "/projects/Mailforge"
  },
  {
    tag: "FULL-STACK",
    title: "Litter Detection From Moving Vehicles",
    description:
      "Custom-built ERP for logistics operations including orders, clients, tracking, and internal workflows.",
    image: "/project-litter.jpg",
    link: "/projects/litter-detection-system"
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Projects
        </h2>
        <p className="text-center  text-gray-600 ">
          Selected projects showcasing full-stack development, system design,
          and real-world engineering problems.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group bg-white rounded-3xl p-8
                         shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="h-48 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                  {project.tag}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
