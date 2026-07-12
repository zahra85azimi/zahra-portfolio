import { useLanguage } from "../../context/LanguageContext";

function PortfolioHeader() {
  const { language } = useLanguage();

  return (
    <div className="text-center">
      <span
        className="
          rounded-full
          px-4
          py-2
          text-sm
          font-semibold
          bg-sky-100
          text-sky-600
          dark:bg-sky-900/40
          dark:text-sky-300
          transition-colors
          duration-500
        "
      >
        {language === "fa" ? "نمونه کارها" : "My Work"}
      </span>
      <h2
        className="
          mt-6
          text-4xl
          font-black
          text-slate-900
          dark:text-white
          transition-colors
          duration-500
        "
      >
        {language === "fa" ? "پروژه‌های منتخب" : "Featured Projects"}
      </h2>
      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          leading-8
          text-slate-500
          dark:text-slate-400
          transition-colors
          duration-500
        "
      >
        {language === "fa"
          ? "در این بخش تعدادی از پروژه‌های منتخب من را مشاهده می‌کنید که مهارت‌ها و علاقه‌ام به توسعه وب مدرن و طراحی رابط کاربری را نشان می‌دهند."
          : "Here are some of my favorite projects that showcase my passion for modern web development, responsive design and clean user interfaces."}
      </p>
    </div>
  );
}

export default PortfolioHeader;
