import about from "../../data/about";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function AboutStats() {
  const { language } = useLanguage();
  return (
    <div className="mt-10 grid grid-cols-2 gap-5">
      {about.stats.map((item, index) => (
        <motion.div
          key={item.title.en}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
          }}
          className="
            rounded-3xl
            border
            border-white/50
            bg-white/70
            dark:bg-slate-800/70
            dark:border-slate-700
            p-6
            backdrop-blur-xl
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >
          <h3 className="text-3xl font-black text-sky-600">
            {language === "fa" ? item.value.replace("+", "") + "+" : item.value}
          </h3>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {item.title[language]}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default AboutStats;
