import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function SkillCard({ skill, index }) {
  const { language } = useLanguage();
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        dark:bg-slate-900
        dark:border-slate-700
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
      "
    >
      <div
        className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-sky-400/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-sky-400/20
        "
      />
      <div className="relative">
        <div
          className="
            inline-flex
            rounded-2xl
            bg-slate-100
            dark:bg-slate-800
            p-5
            transition-all
            duration-300
            group-hover:bg-sky-100
            dark:group-hover:bg-sky-900/40
          "
        >
          <Icon
            className={`
              text-5xl
              transition-all
              duration-500
              group-hover:rotate-12
              group-hover:scale-110
              ${skill.color}
            `}
          />
        </div>
        <p
          className="
            mt-6
            text-xs
            uppercase
            tracking-[4px]
            text-slate-400
            dark:text-slate-500
          "
        >
          {skill.category[language]}
        </p>
        <h3
          className="
            mt-2
            text-2xl
            font-black
            text-slate-800
            dark:text-white
          "
        >
          {skill.name}
        </h3>
        <span
          className="
            mt-6
            inline-block
            rounded-full
            bg-sky-100
            dark:bg-sky-900/40
            px-4
            py-2
            text-sm
            font-semibold
            text-sky-700
            dark:text-sky-300
          "
        >
          {skill.level[language]}
        </span>
      </div>
    </motion.div>
  );
}

export default SkillCard;
