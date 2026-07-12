import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

function PortfolioCard({ project }) {
  const { language } = useLanguage();

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-md
        transition-all
        duration-30
        hover:border-sky-300
        hover:ring-1
        hover:ring-sky-300
        hover:shadow-2xl
        hover:shadow-sky-200/70
        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-sky-500
        dark:hover:shadow-[0_0_35px_rgba(14,165,233,.18)]
      "
    >

      <div
        className="
          overflow-hidden
          border-b
          border-slate-200
          dark:border-slate-700
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
            bg-slate-100
            px-4
            py-3
            dark:bg-slate-900
          "
        >
          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-400"></span>
          <div
            className="
              ml-4
              h-7
              flex-1
              rounded-full
              bg-white
              dark:bg-slate-800
            "
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title[language]}
            className="
              h-56
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white">
          {project.title[language]}
        </h3>
        <p
          className="
            mt-4
            text-[15px]
            leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          {project.description[language]}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies[language].map((tech) => (
            <span
              key={tech}
              className="
                cursor-default
                rounded-full
                bg-slate-100
                px-3
                py-1
                text-xs
                font-semibold
                text-slate-600
                transition-all
                duration-300
                hover:bg-sky-500
                hover:text-white
                dark:bg-slate-700
                dark:text-slate-300
                dark:hover:bg-sky-600
              "
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Buttons */}
        <div className="mt-auto pt-8">
          <div className="h-px bg-slate-200 dark:bg-slate-700" />
          <div className="mt-6 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex-1
                rounded-xl
                border
                border-slate-300
                py-3
                text-center
                font-medium
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-500
                hover:text-sky-600
                dark:border-slate-600
                dark:text-slate-300
                dark:hover:border-sky-500
                dark:hover:text-sky-400
              "
            >
              <span className="flex items-center justify-center gap-2">
                <FiGithub />
                {language === "fa" ? "گیت‌هاب" : "GitHub"}
              </span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                flex-1
                rounded-xl
                bg-sky-500
                py-3
                text-center
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-sky-600
                dark:bg-sky-600
                dark:hover:bg-sky-500
              "
            >
              <span className="flex items-center justify-center gap-2">
                {language === "fa" ? "مشاهده" : "Demo"}
                <FiExternalLink />
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;
