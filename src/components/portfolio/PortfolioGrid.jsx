import projects from "../../data/projects";
import PortfolioCard from "./PortfolioCard";
import usePortfolio from "../../hooks/usePortfolio";
import { useLanguage } from "../../context/LanguageContext";

function PortfolioGrid() {
  const { showAll, toggleProjects } = usePortfolio();
  const { language } = useLanguage();
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <div
        className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {visibleProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
      {projects.length > 3 && (
        <div className="mt-14 flex justify-center">
          <button
            onClick={toggleProjects}
            className="
              rounded-2xl
              bg-sky-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-sky-600
              hover:shadow-lg
            "
          >
            {showAll
              ? language === "fa"
                ? "نمایش کمتر ↑"
                : "Show Less ↑"
              : language === "fa"
                ? "مشاهده همه پروژه‌ها ←"
                : "View All Projects →"}
          </button>
        </div>
      )}
    </>
  );
}

export default PortfolioGrid;
