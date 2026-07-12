import { useState } from "react";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import CertificateModal from "../CertificateModal";

function CertificateCard({ title, issuer, year, skills, image, delay = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <>
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
          hover:border-yellow-300
          hover:shadow-2xl
          hover:shadow-yellow-200/40
          dark:border-slate-700
          dark:bg-slate-800
          dark:hover:border-yellow-500
          dark:hover:shadow-[0_0_35px_rgba(234,179,8,.18)]
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
            bg-yellow-200/20
            blur-3xl
            dark:bg-yellow-500/10
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
            from-yellow-100
            to-amber-100
            text-yellow-600
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
            dark:from-slate-700
            dark:to-slate-600
            dark:text-yellow-400
          "
        >
          <FiAward size={24} />
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
            font-medium
            text-slate-600
            dark:text-slate-300
          "
        >
          {issuer}
        </p>
        <p
          className="
            mt-4
            text-sm
            leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          {skills}
        </p>
        <div className="mt-8 flex items-center justify-between">
          <span
            className="
              rounded-full
              bg-yellow-100
              px-4
              py-2
              text-sm
              font-semibold
              text-yellow-700
              dark:bg-yellow-900/30
              dark:text-yellow-300
            "
          >
            {year}
          </span>
          <button
            onClick={() => setOpen(true)}
            className="
              font-semibold
              text-sky-600
              transition
              duration-300
              hover:text-sky-500
            "
          >
            🔍 View Certificate
          </button>
        </div>
      </motion.div>
      <CertificateModal
        isOpen={open}
        image={image}
        title={title}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default CertificateCard;
