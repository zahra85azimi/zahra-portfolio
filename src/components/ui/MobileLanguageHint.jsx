import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import LanguageButton from "./LanguageButton";

function MobileLanguageHint() {
  const { language } = useLanguage();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    if (language === "fa") return;

    if (localStorage.getItem("mobile-language-hint")) return;

    setShow(true);
  }, [language]);

  const close = () => {
    localStorage.setItem("mobile-language-hint", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="
      fixed
      left-4
      right-4
      top-5
      z-[999]
      rounded-2xl
      border
      border-slate-200
      bg-white/90
      p-4
      shadow-xl
      backdrop-blur
      dark:border-slate-700
      dark:bg-slate-900/90
      lg:hidden
      flex
      justify-evenly
      items-center
    "
    >
      <button onClick={close} className="absolute right-3 top-3 text-slate-400">
        <FiX />
      </button>
      <h3 className="font-bold text-slate-800 dark:text-white">
         نسخه فارسی سایت
      </h3>
      <div className="flex items-center justify-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700">
          <FiMenu />
        </div>
        <FiArrowLeft className="text-sky-500" />
        <LanguageButton preview />
      </div>
    </div>
  );
}

export default MobileLanguageHint;
