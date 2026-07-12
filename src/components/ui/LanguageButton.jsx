import { FaLanguage } from "react-icons/fa";

function LanguageButton({ preview = false }) {
  return (
    <button
      disabled={preview}
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
        dark:bg-slate-700
        dark:text-slate-200
      "
    >
      <FaLanguage />
    </button>
  );
}

export default LanguageButton;
