import { motion } from "framer-motion";

function ContactCard({ icon: Icon, title, value, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        group
        flex
        items-center
        gap-5
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-md
        transition-all
        duration-300
        hover:border-sky-300
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-sky-500
        dark:hover:shadow-[0_0_30px_rgba(14,165,233,.18)]
        "
    >
      <divs
        className="
           flex
           h-14
           w-14
           items-center
           justify-center
           rounded-2xl
           bg-sky-100
           text-sky-600
           text-2xl
           transition-all
           duration-300
           group-hover:bg-sky-500
           group-hover:text-white
           dark:bg-slate-700
           dark:text-sky-400
           dark:group-hover:bg-sky-500
           "
      >
        <Icon />
      </divs>
      <div>
        <h3
          className="
            font-bold
            text-slate-800
            dark:text-white
          "
        >
          {title}
        </h3>
        <p
          dir={href.startsWith("tel:") ? "ltr" : "auto"}
          className="
           mt-1
           text-slate-500
           dark:text-slate-400
          "       
        >
          {value}
        </p>
      </div>
    </motion.a>
  );
}

export default ContactCard;
