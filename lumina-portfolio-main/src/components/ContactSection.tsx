import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { animationConfig, linksConfig } from "@/config";

const links = [
  {
    label: "Email",
    href: `mailto:${linksConfig.social.email}`,
    icon: Mail,
    value: linksConfig.social.email,
  },
  {
    label: "LinkedIn",
    href: linksConfig.social.linkedin,
    icon: Linkedin,
    value: "linkedin.com/in/jai-palan",
  },
  {
    label: "GitHub",
    href: linksConfig.social.github,
    icon: Github,
    value: "github.com/j-palan",
  },
  {
    label: "Phone",
    href: `tel:${linksConfig.social.phone}`,
    icon: Phone,
    value: linksConfig.social.phone,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animationConfig.defaultDuration }}
          className="mb-12"
        >
          <span className="section-title">Contact</span>
          <h2 className="font-caslon text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Let's <span className="gradient-text-accent">connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Always open to discussing new opportunities, collaborations, or interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animationConfig.defaultDuration, delay: animationConfig.defaultDelay }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link, index) => (
            <MagneticButton key={link.label} href={link.href} target="_blank">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * animationConfig.shortDelay }}
                className="glass-card p-4 flex items-center gap-3 min-w-[180px]"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <link.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium truncate max-w-[120px]">{link.value}</p>
                </div>
              </motion.div>
            </MagneticButton>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
