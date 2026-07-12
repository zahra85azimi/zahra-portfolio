import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function ContactHeader() {
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
        {language === "fa" ? "ارتباط با من" : "Contact Me"}
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
        {language === "fa" ? "بیایید با هم همکاری کنیم" : "Let's Work Together"}
      </h2>
      <p
        className="
           mx-auto
           mt-6
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
          ? "اگر ایده، پروژه یا حتی فقط یک سلام داری، خوشحال می‌شوم با من در ارتباط باشی."
          : "Have an idea, a project or just want to say hello? I'd love to hear from you."}
      </p>
    </motion.div>
  );
}

export default ContactHeader;
