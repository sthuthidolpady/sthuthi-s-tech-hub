import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Music, Users, Code, Star } from "lucide-react";

const achievements = [
  { icon: Music, text: "Bharatanatyam (Junior & Senior Grade – Distinction)" },
  { icon: Music, text: "Sangeetha (Junior Grade – Distinction)" },
  { icon: Users, text: "Cultural Coordinator (2025–26), Department of CSE – AJIET" },
  { icon: Code, text: "HacktoberFest 2024 – Open-source Contributor" },
  { icon: Star, text: "Built Official Website for DevNation – Student Development Community" },
  { icon: Award, text: "VTU Youth Fest Participation and Awards" },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-card/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-card border border-border rounded-lg p-4 card-hover flex items-start gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <achievement.icon className="text-primary" size={20} />
              </div>
              <p className="text-sm text-muted-foreground">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
