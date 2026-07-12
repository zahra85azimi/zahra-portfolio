function SectionTitle({ smallTitle, title }) {
  return (
    <>
      <p
        className="
          font-semibold
          uppercase
          tracking-[4px]
          text-sky-600
          dark:text-sky-400
          transition-colors
          duration-500
        "
      >
        {smallTitle}
      </p>
      <h2
        className="
          mt-4
          text-4xl
          font-black
          leading-tight
          text-slate-900
          lg:text-5xl
          dark:text-white
          transition-colors
          duration-500
        "
      >
        {title}
      </h2>
    </>
  );
}

export default SectionTitle;