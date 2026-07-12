import AboutContent from "../components/about/AboutContent";
import AboutImage from "../components/about/AboutImage";

function About() {
  return (
    <section
      id="about"
      className="
        px-6
        py-24
        lg:px-20
        bg-gradient-to-br
        from-white
        via-slate-50
        to-sky-50
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        transition-colors
        duration-500
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-24
          lg:grid-cols-2
        "
      >
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}

export default About;
