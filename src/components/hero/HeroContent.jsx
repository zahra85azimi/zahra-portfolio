import HeroButtons from "./HeroButtons";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function HeroContent() {
  const { t, language } = useLanguage();

  return (
    <motion.div
      className={`max-w-3xl ${language === "fa" ? "text-right" : "text-left"}`}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.8 }}
    >
      <span
        className="
          inline-flex
          rounded-full
          px-4
          py-2
          text-sm
          font-semibold
          bg-sky-100
          text-sky-600
          dark:bg-sky-900/40
          dark:text-sky-300
        "
      >
        {t.hero.badge}
      </span>
      <h1
        className="
          mt-8
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-black
          leading-tight
          bg-gradient-to-r
          from-slate-900
          to-sky-600
          dark:from-white
          dark:to-sky-400
          bg-clip-text
          text-transparent
        "
      >
        {language === "fa" ? "زهرا عظیمی" : "Zahra Azimi"}
      </h1>
      <div
        className="
          mt-6
          text-xl
          sm:text-2xl
          lg:text-3xl
          font-bold
          text-slate-600
          dark:text-slate-300
        "
      >
        {t.hero.rolePrefix}{" "}
        <TypeAnimation
          key={language}
          sequence={[
            t.hero.roles[0],
            2000,
            t.hero.roles[1],
            2000,
            t.hero.roles[2],
            2000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
          className="text-sky-600"
        />
      </div>
      <p
        className="
          mt-8
          max-w-xl
          text-base
          sm:text-lg
          leading-9
          text-slate-500
          dark:text-slate-400
        "
      >
        {t.hero.description}
      </p>
      <HeroButtons />
    </motion.div>
  );
}

export default HeroContent;
