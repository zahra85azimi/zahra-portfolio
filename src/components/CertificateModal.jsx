import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

function CertificateModal({ isOpen, image, title, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[1000]
              w-[92%]
              max-w-5xl
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <button
              onClick={onClose}
              className="
                absolute
                -top-14
                right-0
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-slate-700
                transition
                hover:rotate-90
                dark:bg-slate-800
                dark:text-white
              "
            >
              <FiX size={22} />
            </button>
            <img
              src={image}
              alt={title}
              className="
                max-h-[85vh]
                w-full
                rounded-3xl
                object-contain
                shadow-2xl
              "
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CertificateModal;
