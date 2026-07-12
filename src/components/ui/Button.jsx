function Button({ children, primary = false }) {
  return (
    <button
      className={`
      rounded-xl
      px-7
      py-3
      font-semibold
      transition-all
      duration-300
      ${
        primary
          ? "bg-sky-600 text-white hover:bg-sky-700"
          : "border border-slate-300 bg-white hover:bg-slate-100"
      }
      `}
    >
      {children}
    </button>
  );
}

export default Button;
