import FooterSocials from "./FooterSocials";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        bg-gradient-to-br
        from-slate-900
        via-slate-950
        to-black
        px-6
        py-16
        text-center
        text-white
      "
    >
      <h2 className="text-3xl font-black">
        {language === "fa"
          ? "ممنون که از نمونه‌کار من دیدن کردید 👋"
          : "Thanks for Visiting 👋"}
      </h2>
      <p
        className="
          mx-auto
          mt-5
          max-w-xl
          leading-8
          text-slate-300
        "
      >
        {language === "fa"
          ? "امیدوارم از دیدن نمونه‌کارهام لذت برده باشید. بیاید با هم پروژه‌ای فوق‌العاده بسازیم."
          : "I hope you enjoyed exploring my portfolio. Let's build something amazing together."}
      </p>
      <FooterSocials />
      <div className="mt-12 flex justify-center">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-sky-500
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-2
            hover:bg-sky-600
            hover:shadow-sky-500/40
          "
        >
          <FiArrowUp size={22} />
        </button>
      </div>
      <div
        className="
          mt-12
          border-t
          border-slate-700
          pt-8
          text-sm
          text-slate-400
        "
      >
        {language === "fa"
          ? "© ۲۰۲۶ زهرا عظیمی • طراحی و توسعه با React و Tailwind CSS ❤️"
          : "© 2026 Zahra Azimi • Designed & Developed by Zahra Azimi with React + Tailwind CSS ❤️"}
      </div>
    </motion.footer>
  );
}

export default Footer;
