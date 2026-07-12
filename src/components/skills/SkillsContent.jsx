import SectionTitle from "../ui/SectionTitle";
import SkillCard from "./SkillCard";
import skills from "../../data/skills";
import { useLanguage } from "../../context/LanguageContext";

function SkillsContent() {
  const { language } = useLanguage();

  return (
    <div>
      <SectionTitle
        smallTitle={language === "fa" ? "مهارت‌های من" : "My Skills"}
        title={
          language === "fa"
            ? "تکنولوژی‌هایی که با آن‌ها کار می‌کنم"
            : "Technologies I Work With"
        }
      />
      <p
        className="
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
          ? "با استفاده از جدیدترین تکنولوژی‌های فرانت‌اند، وب‌سایت‌های مدرن، واکنش‌گرا و تعاملی توسعه می‌دهم. همچنین همیشه در حال یادگیری ابزارهای جدید و ارتقای مهارت‌های برنامه‌نویسی خود هستم."
          : "I build responsive, modern and interactive websites using the latest front-end technologies. I always enjoy learning new tools and improving my development skills."}
      </p>
      <div
        className="
          mt-14
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

export default SkillsContent;
