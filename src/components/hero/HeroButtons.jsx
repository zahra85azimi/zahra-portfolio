import { FiDownload, FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
import { useLanguage } from "../../context/LanguageContext";

function HeroButtons() {
  const { language } = useLanguage();

  const resume =
    language === "fa"
      ? "/Zahra_Azimi_Resume_FA.pdf"
      : "/Zahra_Azimi_Resume_EN.pdf";

  const fileName =
    language === "fa"
      ? "Zahra_Azimi_Resume_FA.pdf"
      : "Zahra_Azimi_Resume_EN.pdf";

  return (
    <div
      className={`mt-10 flex flex-col gap-4 sm:flex-row ${
        language === "fa" ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* Download CV */}

      <a
        href={resume}
        download={fileName}
        className="
          rounded-xl
          px-8
          py-4
          font-semibold
          text-white
          shadow-xl
          transition-all
          duration-300
          bg-sky-500
          hover:bg-sky-600
          dark:bg-sky-600
          dark:hover:bg-sky-500
          hover:-translate-y-1
          hover:shadow-sky-300/50
        "
      >
        <span className="flex items-center gap-2">
          <FiDownload />
          {language === "fa" ? "دانلود رزومه" : "Download CV"}
        </span>
      </a>

      {/* Contact */}

      <Link
        to="contact"
        smooth={true}
        duration={700}
        offset={-20}
        className="
          cursor-pointer
          rounded-xl
          border
          border-slate-300
          bg-white
          text-slate-700
          dark:border-slate-700
          dark:bg-slate-800
          dark:text-slate-200
          dark:hover:border-sky-500
          dark:hover:text-sky-400
          px-8
          py-4
          font-semibold
          transition-all
          duration-300
          hover:border-sky-500
          hover:text-sky-600
        "
      >
        <span className="flex items-center gap-2">
          <FiMail />
          {language === "fa" ? "تماس با من" : "Contact Me"}
        </span>
      </Link>
    </div>
  );
}

export default HeroButtons;
