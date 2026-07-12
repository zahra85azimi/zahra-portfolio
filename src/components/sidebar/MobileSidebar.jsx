import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";
import Navigation from "./Navigation";
import SidebarFooter from "./SidebarFooter";

function MobileSidebar({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-40
              bg-black/40
              backdrop-blur-sm
              dark:bg-black/70
              lg:hidden
            "
          />

          {/* Sidebar */}

          <motion.aside
            initial={{ x: 350 }}
            animate={{ x: 0 }}
            exit={{ x: 350 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-80
              flex-col
              bg-white
              shadow-2xl
              dark:bg-slate-900
              lg:hidden
            "
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="
                absolute
                left-5
                top-5
                rounded-xl
                p-2
                text-slate-700
                transition-all
                duration-300
                hover:bg-slate-100
                dark:text-white
                dark:hover:bg-slate-800
              "
            >
              <FiX size={24} />
            </button>
            <div
              className="
                border-b
                border-slate-200
                p-8
                dark:border-slate-700
              "
            >
              <ProfileCard />
              <SocialLinks />
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <Navigation />
            </div>
            <div
              className="
                border-t
                border-slate-200
                p-5
                dark:border-slate-700
              "
            >
              <SidebarFooter />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileSidebar;
