import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile/hero-profile.JPG";
import { useLanguage } from "../../context/LanguageContext";

function HeroImage() {
  const { language } = useLanguage();

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
    >
      <div
        className="
          absolute
          h-[220px]
          w-[220px]
          sm:h-[340px]
          sm:w-[340px]
          lg:h-[430px]
          lg:w-[430px]
          rounded-full
          bg-sky-400/20
          dark:bg-sky-500/10
          blur-3xl"
      />
      {/* Available work */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          sm:-top-6
          rounded-full
          bg-white
          dark:bg-slate-800
          px-5
          py-2
          shadow-lg
          dark:border
          dark:border-slate-700
          z-2
        "
      >
        <span
          className="
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-slate-700
            dark:text-slate-200
          "
        >
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          {language === "fa" ? "آماده همکاری" : "Available for Work"}
        </span>
      </div>
      {/* Profile */}
      <img
        src={profileImage}
        alt={language === "fa" ? "زهرا عظیمی" : "Zahra Azimi"}
        className="
          relative
          h-[260px]
          w-[260px]
          sm:h-[330px]
          sm:w-[330px]
          lg:h-[420px]
          lg:w-[420px]
          rounded-full
          border-[8px]
          border-white
          object-cover
          shadow-2x
          dark:border-slate-800
          transition-all
          duration-500
        "
      />
      {/* coding */}
      <div
        className="
           absolute
           bottom-0
           right-1/2
           translate-x-1/2
           sm:-bottom-6
           sm:right-8
           sm:translate-x-0
           rounded-2xl
           bg-white
           dark:bg-slate-800
           px-5
           py-3
           shadow-xl
           dark:border
           dark:border-slate-700
          "
      >
        <p
          className="
               text-sm
               text-slate-500
               dark:text-slate-400
             "
        >
          {language === "fa" ? "برنامه‌نویسی" : "Coding"}
        </p>
        <h3
          className="
            text-xl
            font-bold
            text-slate-900
            dark:text-white
            "
        >
          {language === "fa" ? "۲+ سال" : "2+ Years"}
        </h3>
      </div>
    </motion.div>
  );
}

export default HeroImage;
