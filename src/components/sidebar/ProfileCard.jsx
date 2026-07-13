import profileLight from "../../assets/images/profile/sidebar-profile.PNG";
import profileDark from "../../assets/images/profile/sidebar-profile-dark.PNG";
import { useLanguage } from "../../context/LanguageContext";

function ProfileCard() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div
          className="
            absolute
            -inset-2
            rounded-full
            bg-sky-500/20
            blur-lg
          "
        />
        <img
          src={profileLight}
          alt={language === "fa" ? "زهرا عظیمی" : "Zahra Azimi"}
          className="
            relative
            h-40
            w-40
            rounded-full
            object-cover
            shadow-xl
            transition-all
            duration-500
            hover:scale-105
            hover:rotate-1
            dark:hidden
          "
        />
        <img
          src={profileDark}
          alt={language === "fa" ? "زهرا عظیمی" : "Zahra Azimi"}
          className="
            relative
            hidden
            h-40
            w-40
            rounded-full
            object-cover
            shadow-xl
            transition-all
            duration-500
            hover:scale-105
            hover:rotate-1
            dark:block
          "
        />
      </div>
      <h1
        className="
          mt-6
          text-3xl
          font-bold
          dark:text-white
        "
      >
        {language === "fa" ? "زهرا عظیمی" : "Zahra Azimi"}
      </h1>
      <p
        className="
          mt-2
          text-gray-500
          dark:text-slate-400
        "
      >
        {language === "fa" ? "توسعه‌دهنده فرانت‌اند" : "Front-End Developer"}
      </p>
    </div>
  );
}

export default ProfileCard;
