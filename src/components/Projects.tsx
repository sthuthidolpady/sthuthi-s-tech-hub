import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "HEAREASE – Music Therapy Application for Tinnitus",
    description: "Web-based solution to enhance auditory experience for individuals with hearing impairments with real-time customization of hearing aid settings.",
    tech: ["HTML", "JavaScript", "MongoDB", "REST API", "Tailwind CSS"],
    github: "#",
  },
  {
    title: "Multi-Modal Endometrial Cancer Classification",
    description: "AI model using TCGA-UCEC clinical and histopathology data with CNN-based feature extraction and multimodal fusion for improved accuracy.",
    tech: ["TensorFlow", "MobileNetV2", "DenseNet121", "Python"],
    github: "#",
  },
  {
    title: "Movie Reservation System (Open Source)",
    description: "Client, Admin, and Theatre panels for comprehensive booking management with real-time seat availability.",
    tech: ["PHP", "XAMPP", "HTML", "CSS", "JavaScript"],
    github: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="bg-card border border-border rounded-xl p-6 card-hover flex flex-col group"
            >
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
