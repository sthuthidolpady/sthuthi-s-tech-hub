import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Cpu, Database, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive and modern web applications.",
    features: ["Frontend", "Responsive Design", "Database-driven Applications"],
  },
  {
    icon: Cpu,
    title: "AI / Machine Learning",
    description: "Build AI and machine learning models to analyze data and solve real-world problems",
    features: ["CNN-based Image Analysis", "Deep Learning Models", "Research-oriented AI Projects"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Areas of <span className="gradient-text">Interest</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
