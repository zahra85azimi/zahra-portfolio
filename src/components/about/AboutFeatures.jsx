import about from "../../data/about";
import { FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

function AboutFeatures() {
  const { language } = useLanguage();
  return (
    <div className="mt-8 space-y-4">
      {about.features.map((feature) => (
        <div key={feature.en} className="flex items-center gap-3">
          <FiCheckCircle className="text-sky-600" />
          <span className="text-slate-600 dark:text-slate-300">
            {feature[language]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AboutFeatures;
