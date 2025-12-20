import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering – Computer Science and Engineering",
    institution: "A J Institute of Engineering and Technology, Mangaluru",
    period: "2022 – 2026",
    grade: "CGPA: 7.7",
  },
  {
    degree: "Pre-University (PCMB)",
    institution: "Sharadha Pre-University College, Mangaluru",
    period: "2020 – 2022",
    grade: "",
  },
  {
    degree: "High School",
    institution: "Shri Mahalingheshwara English Medium School, Surathkal",
    period: "2019 – 2020",
    grade: "",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12"
        >
          I am Sthuthi Dolpady, a Computer Science and Engineering student graduating in 2026, with a strong interest in Web Development and Artificial Intelligence. I enjoy solving real-world problems through clean code, intelligent systems, and impactful projects. Along with technical expertise, I bring leadership experience, creativity, and active involvement in open-source and cultural activities.
        </motion.p>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 justify-center">
            <GraduationCap className="text-primary" size={28} />
            Education
          </h3>
          <div className="grid gap-4 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-5 card-hover"
              >
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <span className="text-primary">{edu.period}</span>
                  {edu.grade && <span className="text-muted-foreground">{edu.grade}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-10"
        >
          <a
            href="/resume.pdf"
            download
            className="btn-outline flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
