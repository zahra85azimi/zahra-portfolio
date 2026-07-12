import { FiMenu } from "react-icons/fi";

function HamburgerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        right-5
        top-5
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        bg-white
        text-slate-800
        shadow-lg
        transition-all
        duration-300
        dark:bg-slate-800
        dark:text-white
        dark:border
        dark:border-slate-700
        lg:hidden
      "
    >
      <FiMenu size={24} />
    </button>
  );
}

export default HamburgerButton;
