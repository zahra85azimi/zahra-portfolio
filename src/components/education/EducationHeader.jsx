import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function EducationHeader() {
  const { language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span
        className="
        inline-flex
        rounded-full
        bg-sky-100
        px-4
        py-2
        text-sm
        font-semibold
        text-sky-600
        dark:bg-sky-900/40
        dark:text-sky-300
        transition-colors
        duration-500
      "
      >
        {language === "fa" ? "تحصیلات" : "Education"}
      </span>
      <h2
        className="
        mt-6
        text-4xl
        font-black
        text-slate-900
        dark:text-white
        transition-colors
        duration-500
      "
      >
        {language === "fa" ? "مسیر یادگیری من" : "My Learning Journey"}
      </h2>
      <p
        className="
        mx-auto
        mt-5
        max-w-2xl
        text-lg
        leading-8
        text-slate-500
        dark:text-slate-400
        transition-colors
        duration-500
      "
      >
        {language === "fa"
          ? "سوابق تحصیلی و مسیر یادگیری حرفه‌ای من."
          : "My academic background and professional learning path."}
      </p>
    </motion.div>
  );
}

export default EducationHeader;
