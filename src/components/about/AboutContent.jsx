import SectionTitle from "../ui/SectionTitle";
import AboutFeatures from "./AboutFeatures";
import AboutStats from "./AboutStats";
import about from "../../data/about";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function AboutContent() {
  const { language } = useLanguage();
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <SectionTitle
          smallTitle={language === "fa" ? "درباره من" : "About Me"}
          title={about.title[language]}
        />
        <p
          className="
            mt-6
            max-w-xl
            leading-8
            text-slate-500
            dark:text-slate-400
          "
        >
          {about.description[language]}
        </p>
        <AboutFeatures />
        <AboutStats />
      </motion.div>
    </div>
  );
}

export default AboutContent;
