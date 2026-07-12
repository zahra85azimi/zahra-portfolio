import PortfolioHeader from "../components/portfolio/PortfolioHeader";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
        px-6
        py-28
        sm:px-8
        lg:px-20
        bg-white
        dark:bg-slate-900
        transition-colors
        duration-500
      "
    >
      <div className="mx-auto max-w-7xl">
        <PortfolioHeader />
        <PortfolioGrid />
      </div>
    </section>
  );
}

export default Portfolio;
