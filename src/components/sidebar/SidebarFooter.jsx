import { FaMoon, FaSun, FaLanguage } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

function SidebarFooter() {
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center gap-4">
        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            text-slate-700
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-sky-500
            hover:text-white
            dark:bg-slate-800
            dark:text-white
            dark:hover:bg-sky-500
          "
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        {/* Language Button */}
        <button
          onClick={toggleLanguage}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            text-slate-700
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-sky-500
            hover:text-white
            dark:bg-slate-700
            dark:text-slate-200
          "
        >
          <FaLanguage />
        </button>
      </div>
      <p
        className="
          text-center
          text-xs
          text-slate-400
          dark:text-slate-500
        "
      >
        © 2026 Zahra Azimi
      </p>
    </div>
  );
}

export default SidebarFooter;
