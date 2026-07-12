import EducationHeader from "../components/education/EducationHeader";
import EducationCard from "../components/education/EducationCard";
import education from "../data/education";
import { useLanguage } from "../context/LanguageContext";

function Education() {
  const { language } = useLanguage();

  return (
    <section
      id="education"
      className="
        bg-white
        dark:bg-slate-900
        px-6
        py-28
        sm:px-8
        lg:px-20
        transition-colors
        duration-500
      "
    >
      <div className="mx-auto max-w-7xl">
        <EducationHeader />
        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {education[language].map((item, index) => (
            <EducationCard
              key={index}
              title={item.title}
              place={item.place}
              date={item.date}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
