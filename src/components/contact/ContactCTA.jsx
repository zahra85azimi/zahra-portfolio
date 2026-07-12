import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function ContactCTA() {
  const { language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
      relative
      overflow-hidden
      flex
      h-full
      flex-col
      justify-center
      rounded-[32px]
      bg-gradient-to-br
      from-sky-500
      to-sky-700
      dark:from-sky-700
      dark:to-sky-950
      p-10
      text-white
      "
    >
      <div
        className="
        absolute
        -top-20
        -right-20
        h-60
        w-60
        rounded-full
        bg-white/10
        blur-3xl
      "
      />
      <h2 className="text-4xl font-black">
        {language === "fa"
          ? "آماده‌ای چیزی فوق‌العاده بسازیم؟"
          : "Ready to Build Something Amazing?"}
      </h2>
      <p className="mt-6 leading-8 text-sky-100">
        {language === "fa"
          ? "اگر پروژه، همکاری یا فرصت فریلنسری داری، خوشحال می‌شوم با هم صحبت کنیم."
          : "Whether it's a new project, collaboration or freelance opportunity, I'd love to hear about it."}
      </p>
      <a
        href="mailto:zahraazm222@gmail.com"
        className="
        mt-10
        inline-flex
        w-fit
        items-center
        gap-3
        rounded-2xl
        bg-white
        px-8
        py-4
        font-semibold
        text-sky-600
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-white/20
        dark:hover:bg-slate-100
      "
      >
        {language === "fa" ? "ارسال ایمیل" : "Send Email"}

        <FiArrowRight />
      </a>
    </motion.div>
  );
}

export default ContactCTA;
