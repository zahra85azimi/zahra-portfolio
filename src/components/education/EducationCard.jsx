import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

function EducationCard({ title, place, date, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white/90
        backdrop-blur-sm
        p-8
        shadow-lg
        transition-all
        duration-500
        hover:border-sky-300
        hover:shadow-2xl
        hover:shadow-sky-200/40
        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-sky-500
        dark:hover:shadow-[0_0_35px_rgba(14,165,233,.18)]
      "
    >
      <div
        className="
          absolute
          -right-10
          -top-10
          h-36
          w-36
          rounded-full
          bg-sky-200/20
          blur-3xl
          dark:bg-sky-500/10
        "
      />

      <div
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-sky-100
          to-cyan-100
          text-sky-600
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
          dark:from-slate-700
          dark:to-slate-600
          dark:text-sky-400
        "
      >
        <FiBookOpen size={24} />
      </div>
      <h3
        className="
          mt-6
          text-2xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        {title}
      </h3>
      <p
        className="
          mt-3
          text-base
          leading-7
          text-slate-500
          dark:text-slate-400
        "
      >
        {place}
      </p>
      <span
        className="
          mt-8
          inline-flex
          rounded-full
          bg-sky-100
          px-4
          py-2
          text-sm
          font-semibold
          text-sky-700
          dark:bg-sky-900/40
          dark:text-sky-300
        "
      >
        {date}
      </span>
    </motion.div>
  );
}

export default EducationCard;
