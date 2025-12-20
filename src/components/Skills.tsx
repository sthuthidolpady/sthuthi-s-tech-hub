import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, MessageSquare, Globe } from "lucide-react";
const technicalSkills = [{
  category: "Programming",
  skills: ["C", "C++", "Python", "Java"]
}, {
  category: "Web Technologies",
  skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP"]
}, {
  category: "Databases",
  skills: ["MySQL", "MongoDB"]
}, {
  category: "Core Concepts",
  skills: ["Object-Oriented Programming", "REST APIs"]
}, {
  category: "AI / ML",
  skills: ["TensorFlow", "CNNs", "MobileNetV2", "DenseNet121", "Multimodal Learning"]
}];
const additionalSkills = [{
  icon: MessageSquare,
  label: "Communication & Teamwork"
}, {
  icon: Brain,
  label: "Leadership & Coordination"
}, {
  icon: Code2,
  label: "Open-source Contribution"
}, {
  icon: Globe,
  label: "English, Hindi, Kannada, Tulu"
}];
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="skills" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {technicalSkills.map((skillGroup, index) => <motion.div key={skillGroup.category} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.1 + index * 0.1
        }} className="bg-card border border-border rounded-lg p-5 card-hover">
              <h3 className="text-primary font-semibold mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map(skill => {})}
              </div>
            </motion.div>)}
        </div>

        {/* Additional Skills */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.5
      }}>
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => <motion.div key={skill.label} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {}} transition={{
            duration: 0.4,
            delay: 0.6 + index * 0.1
          }} className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                <skill.icon className="text-primary mx-auto mb-2" size={24} />
                <p className="text-sm text-muted-foreground">{skill.label}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Skills;